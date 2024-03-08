import { useCallback, useEffect, useState } from "react";
import { ProductCard } from "./product-card.jsx";
import { useParams } from "react-router-dom";
import getProductService from "../services/get-product-service.js";
import deleteProductService from "../services/delete-product-service.js";
import { useNavigate } from "react-router-dom";
import updateProductService from "../services/update-product-service.js";

const ProductComponent = () => {
    const [product, setproduct] = useState({
        id: 0,
        name: "",
        brand: "",
        model: "",
        color: "",
        price: 0,
    });
    const { productId } = useParams();
    const nagivate = useNavigate();

    const getProduct = useCallback(async () => {
        const response = await getProductService(productId);
        setproduct(response);
    }, [productId]);

    const handleDeleteEvent = async (id) => {
        const response = await deleteProductService(id);
        if (typeof response === "string") {
            nagivate("/");
        }
    };

    const handleUpdateEvent = async (fields) => {
        const response = await updateProductService(productId, {
            name: fields.name,
            brand: fields.brand,
            model: fields.model,
            color: fields.color,
            price: Number(fields.price),
        });

        if (typeof response === "string") {
            nagivate("/");
        }
    };

    useEffect(() => {
        getProduct();
    }, [getProduct]);

    return (
        <div className="card-container">
            <button onClick={() => nagivate("/")} className="submit-product">
                Voltar
            </button>
            <ProductCard
                id={product.id}
                brand={product.brand}
                color={product.color}
                model={product.model}
                name={product.name}
                price={product.price}
                onClickDelete={handleDeleteEvent}
                onClickEdit={(fields) => {
                    handleUpdateEvent(fields);
                }}
            />
        </div>
    );
};

export default ProductComponent;
