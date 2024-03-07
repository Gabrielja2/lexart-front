import { API_BASE_URI } from "../../env.js";

const createUserService = async (data) => {
    const response = await fetch(`${API_BASE_URI}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
        }),
    });
    const userEmail = await response.json();

    return userEmail;
};

export default createUserService;
