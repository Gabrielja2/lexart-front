import { ProductCard } from "./product-card.jsx";
import PropTypes from "prop-types";

const HomeContent = (props) => {
    const { products } = props;

    const renderProductsMap = (products) => {
        return products.map((product, index) => {
            return (
                <a
                    style={{
                        textDecoration: "none",
                        color: "black",
                    }}
                    href={`/products/${product.id}`}
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
                </a>
            );
        });
    };

    return (
        <div className="card-container">
            {products.length > 0 ? (
                renderProductsMap(products)
            ) : (
                <div className="products-message-container">
                    Ainda não existe productos cadastrados. Clique no botão
                    criar para criar um.
                </div>
            )}
        </div>
    );
};

HomeContent.propTypes = {
    products: PropTypes.array,
};

export default HomeContent;
