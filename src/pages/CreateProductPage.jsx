import CreateProductComponent from "../components/create-product-component";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import createProductService from "../services/create-product-service";
import { useNavigate } from "react-router-dom";

const CreateProductPage = () => {
    const [formsQuantity, setQuantity] = useState(0);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            products: [
                {
                    name: "",
                    brand: "",
                    model: "",
                    color: "",
                    price: "",
                },
            ],
        },
    });

    const onSubmit = async (data) => {
        for (let d of data.products) {
            const response = await createProductService({
                name: d.name,
                brand: d.brand,
                model: d.model,
                color: d.color,
                price: Number(d.price),
            });
            if (response.length > 0) {
                navigate("/");
            }
        }
    };

    const FormsArray = useMemo(() => {
        const forms = [];
        for (let i = 0; i <= formsQuantity; i++) {
            forms.push(
                <CreateProductComponent register={register} index={i} key={i} />
            );
        }
        return forms;
    }, [formsQuantity, register]);

    return (
        <div style={{ width: "100%" }} className="card-container">
            <h1>Cadastro de produtos</h1>
            <button className="show-products" onClick={() => navigate("/")}>
                Ver produtos
            </button>
            <button
                className="add-product"
                onClick={() => setQuantity(formsQuantity + 1)}
            >
                Inserir formulário
            </button>
            <button form="id-form" className="submit-product" type="submit">
                Criar produtos
            </button>
            <form id="id-form" onSubmit={handleSubmit(onSubmit)}>
                {[...FormsArray]}
            </form>
        </div>
    );
};

export default CreateProductPage;
