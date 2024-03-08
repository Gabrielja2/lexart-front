import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getProductsService from "../services/get-products-service.js";
import HomeContent from "../components/home-content.jsx";
import HomeHeader from "../components/home-header.jsx";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const userToken = localStorage.getItem("token");
    const navigate = useNavigate();

    const onSearch = useCallback(async (searchText) => {
        const newProducts = await getProductsService(searchText);

        setProducts(newProducts);
    }, []);

    useEffect(() => {
        onSearch();
    }, [onSearch]);

    useEffect(() => {
        if (!userToken) {
            navigate("/login");
        }
    }, []);

    return (
        <div style={{ backgroundColor: "#333" }}>
            <HomeHeader onSearch={onSearch} />
            <HomeContent products={products} />
        </div>
    );
};

export default HomePage;
