import PropTypes from "prop-types";

const CreateProductForm = (props) => {
    const { register, index } = props;

    const fieldName = `products[${index}]`;
    return (
        <div className="create-product-card">
            <div className="">
                <div>
                    <label>
                        Nome:
                        <input
                            type="text"
                            name="name"
                            className="product-info"
                            {...register(`${fieldName}.name`)}
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
                            {...register(`${fieldName}.brand`)}
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
                            {...register(`${fieldName}.model`)}
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
                            {...register(`${fieldName}.color`)}
                            autoComplete="off"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Preço:
                        <input
                            type="number"
                            name="price"
                            className="product-price"
                            {...register(`${fieldName}.price`)}
                            autoComplete="off"
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

CreateProductForm.propTypes = {
    register: PropTypes.func,
    index: PropTypes.number,
};

export default CreateProductForm;
