import { API_BASE_URI } from "../../env.js";

const getProductService = async (productId) => {
    const response = await fetch(`${API_BASE_URI}/api/products/${productId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });

    const product = await response.json();

    return product;
};

export default getProductService;
