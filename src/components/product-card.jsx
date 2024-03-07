import PropTypes from "prop-types";
import "../style.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductCard(props) {
    const { id, brand, color, model, name, price, onClickDelete, onClickEdit } =
        props;
    const { productId } = useParams();
    const [isEditing, setIsEditing] = useState(false);
    const [fields, setFields] = useState({
        name,
        brand,
        model,
        color,
        price,
    });

    const handleChangeInput = (field) => (e) => {
        setFields((oldState) => ({
            ...oldState,
            [field]: e.target.value,
        }));
    };

    useEffect(() => {
        if (id) {
            setFields({
                name,
                brand,
                model,
                color,
                price,
            });
        }
    }, [id, name, brand, model, color, price]);

    return (
        <div className="product-card">
            <span>ID: {id}</span>
            <div>
                <label>
                    Nome:
                    <input
                        type="text"
                        name="name"
                        className="product-info"
                        onChange={handleChangeInput("name")}
                        defaultValue={fields.name}
                        disabled={isEditing ? false : true}
                        autoComplete="off"
                    />
                </label>
            </div>
            <div>
                <label>
                    Marca:
                    <input
                        type="text"
                        name="brand"
                        className="product-info"
                        onChange={handleChangeInput("brand")}
                        defaultValue={fields.brand}
                        disabled={isEditing ? false : true}
                        autoComplete="off"
                    />
                </label>
            </div>
            <div>
                <label>
                    Modelo:
                    <input
                        type="text"
                        name="model"
                        className="product-info"
                        onChange={handleChangeInput("model")}
                        defaultValue={fields.model}
                        disabled={isEditing ? false : true}
                        autoComplete="off"
                    />
                </label>
            </div>
            <div>
                <label>
                    Cor:
                    <input
                        name="color"
                        type="text"
                        className="product-info"
                        onChange={handleChangeInput("color")}
                        defaultValue={fields.color}
                        disabled={isEditing ? false : true}
                        autoComplete="off"
                    />
                </label>
            </div>
            <div>
                <label>
                    Preço:
                    <input
                        type="text"
                        name="price"
                        className="product-price"
                        onChange={handleChangeInput("price")}
                        value={fields.price}
                        disabled={isEditing ? false : true}
                        autoComplete="off"
                    />
                </label>
            </div>
            {productId ? (
                <div>
                    <button
                        onClick={() => {
                            if (isEditing) {
                                setIsEditing(false);
                            } else {
                                onClickDelete(id);
                            }
                        }}
                    >
                        {isEditing ? "Cancelar" : "Deletar"}
                    </button>
                    <button
                        onClick={() => {
                            if (isEditing) {
                                onClickEdit(fields);
                                setIsEditing(false);
                            } else {
                                setIsEditing(true);
                            }
                        }}
                    >
                        {isEditing ? "Salvar" : "Editar"}
                    </button>
                </div>
            ) : null}
        </div>
    );
}

ProductCard.propTypes = {
    id: PropTypes.number,
    brand: PropTypes.string,
    color: PropTypes.string,
    model: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    onClickDelete: PropTypes.func,
    onClickEdit: PropTypes.func,
};
