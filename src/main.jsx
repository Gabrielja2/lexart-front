import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/Register.jsx";
import LoginPage from "./pages/Login.jsx";
import HomePage from "./pages/Home.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CreateProductPage from "./pages/CreateProductPage.jsx";

const router = createBrowserRouter([
    {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/products/:productId",
        element: <ProductPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/products",
        element: <CreateProductPage />,
        errorElement: <NotFoundPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
