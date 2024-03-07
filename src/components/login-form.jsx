import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import "../style.scss";
import loginService from "../services/login-service.js";
import createEmailError from "../utils/errors/email-error.jsx";
import createPasswordError from "../utils/errors/password-error.jsx";
import loginUserFormSchema from "../utils/zod-schemas/login-user-schema.js";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const loginFormSchema = loginUserFormSchema;

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const emailError = createEmailError(errors);
    const passwordError = createPasswordError(errors);

    const handleSignIn = async (data) => {
        const response = await loginService(data);

        if (typeof response === "string") {
            localStorage.setItem("token", response);
            navigate("/");
        }
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/");
        }
    }, []);

    return (
        <div className="app-container">
            <div className="f-container ">
                <span className="title">Lexart</span>
                <span className="subtitle">Login</span>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <div className="input-container">
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Digite seu email"
                            autoComplete="on"
                        />
                        {emailError}
                    </div>
                    <div className="input-container">
                        <input
                            {...register("password")}
                            type={showPassword ? "text" : "password"}
                            placeholder="Digite sua senha"
                            autoComplete="off"
                        />
                        <div
                            className="icon-container"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <EyeOff /> : <Eye />}
                        </div>
                        {passwordError}
                    </div>

                    <button disabled={isSubmitting} type="submit">
                        {isSubmitting ? "Entrando..." : " Entrar"}
                    </button>
                </form>
                <span>
                    Você ainda não tem uma conta?{" "}
                    <a href="/register" className="a-link">
                        Registrar
                    </a>
                </span>
            </div>
        </div>
    );
};

export default LoginForm;
