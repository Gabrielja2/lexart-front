import { API_BASE_URI } from "../../env.js";

const updateProductService = async (productId, body) => {
    const response = await fetch(`${API_BASE_URI}api/products/${productId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(body),
    });

    const product = await response.json();

    return product;
};

export default updateProductService;
