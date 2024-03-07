import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getProductsService from "../services/get-products-service.js";
import HomeContent from "../components/home-content.jsx";
import HomeHeader from "../components/home-header.jsx";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const userToken = localStorage.getItem("token");
    const navigate = useNavigate();

    const fetchProducts = useCallback(async () => {
        const products = await getProductsService();

        setProducts(products);
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    useEffect(() => {
        if (!userToken) {
            navigate("/login");
        }
    }, []);

    const onSearch = async (searchText) => {
        const newProducts = await getProductsService(searchText);
        console.log("newProducts", newProducts);
        setProducts(newProducts);
    };

    return (
        <div style={{ backgroundColor: "#333" }}>
            <HomeHeader onSearch={onSearch} />
            <HomeContent products={products} />
        </div>
    );
};

export default HomePage;
