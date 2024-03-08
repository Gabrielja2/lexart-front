import { VITE_API_BASE_URI } from "../../env.js";

const createProductService = async (data) => {
    const response = await fetch(`${VITE_API_BASE_URI}api/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
    });
    const productName = await response.json();

    return productName;
};

export default createProductService;
