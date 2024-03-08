import { VITE_API_BASE_URI } from "../../env.js";
const loginService = async (data) => {
    const response = await fetch(`${VITE_API_BASE_URI}api/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password,
        }),
    });
    const token = await response.json();

    return token;
};

export default loginService;
