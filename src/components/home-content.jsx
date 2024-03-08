import { Link } from "react-router-dom";
import { ProductCard } from "./product-card.jsx";
import PropTypes from "prop-types";

const HomeContent = (props) => {
    const { products } = props;

    const renderProductsMap = (products) => {
        return products.map((product, index) => {
            return (
                <Link
                    style={{
                        textDecoration: "none",
                        color: "black",
                    }}
                    to={`/products/${product.id}`}
                    key={index}
                >
                    <ProductCard
                        id={product.id}
                        brand={product.brand}
                        color={product.color}
                        model={product.model}
                        name={product.name}
                        price={product.price}
                    />
                </Link>
            );
        });
    };

    return (
        <div className="card-container">
            {products.length > 0 ? (
                renderProductsMap(products)
            ) : (
                <div className="products-message-container">
                    Produto não cadastrado. Clique no botão criar para criar um.
                </div>
            )}
        </div>
    );
};

HomeContent.propTypes = {
    products: PropTypes.array,
};

export default HomeContent;
