import { API_BASE_URI } from "../../env.js";

const getProductsService = async (searchText) => {
    const searchParam = searchText ? `?text=${searchText}` : "";

    const response = await fetch(`${API_BASE_URI}api/products${searchParam}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    const products = await response.json();

    return products;
};

export default getProductsService;
