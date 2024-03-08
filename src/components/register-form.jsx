import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import "../style.scss";
import createUserService from "../services/create-user-service.js";
import createUserFormSchema from "../utils/zod-schemas/create-user-schema.js";
import createNameError from "../utils/errors/name-error.jsx";
import createEmailError from "../utils/errors/email-error.jsx";
import createPasswordError from "../utils/errors/password-error.jsx";
import createConfirmPasswordError from "../utils/errors/confirm-password-error.jsx";
import { useNavigate, Link } from "react-router-dom";
const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setshowConfirmPassword((prevState) => !prevState);
    };

    const userFormSchema = createUserFormSchema;

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm({
        resolver: zodResolver(userFormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const nameError = createNameError(errors);
    const emailError = createEmailError(errors);
    const passwordError = createPasswordError(errors);
    const confirmPasswordError = createConfirmPasswordError(errors);

    const handleSignUp = async (data) => {
        const response = await createUserService(data);

        if (typeof response === "string") {
            navigate("/login");
        }
    };

    return (
        <div className="app-container">
            <div className="f-container">
                <span className="title">Lexart</span>
                <span className="subtitle">Registro</span>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="input-container">
                        <input
                            {...register("username")}
                            type="text"
                            placeholder="Digite seu nome"
                            autoComplete="on"
                        />
                        {nameError}
                    </div>
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

                    <div className="input-container">
                        <input
                            {...register("confirmPassword")}
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirme sua senha"
                            autoComplete="off"
                        />

                        <div
                            className="icon-container"
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            {showConfirmPassword ? <EyeOff /> : <Eye />}
                        </div>
                        {confirmPasswordError}
                    </div>

                    <button disabled={isSubmitting} type="submit">
                        {isSubmitting ? "Registrando..." : " Registrar"}
                    </button>
                </form>
                <span>
                    Ja tem uma conta?{" "}
                    <Link to="/login" className="a-link">
                        Entrar
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default RegisterForm;
