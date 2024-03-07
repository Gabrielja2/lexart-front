import { z } from "zod";

const createUserFormSchema = z
    .object({
        username: z.string().min(3, "Nome inválido"),
        email: z.string().email("Email inválido"),
        password: z
            .string()
            .regex(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?:([0-9a-zA-Z])){8,}$/,
                "Deve ter ao menos 8 caracteres, letra maiúscula, minúscula e número"
            ),
        confirmPassword: z
            .string()
            .regex(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?:([0-9a-zA-Z])){8,}$/,
                "Deve ter ao menos 8 caracteres, letra maiúscula, minúscula e número"
            ),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "As senhas devem ser iguais",
        path: ["confirmPassword"],
    });

export default createUserFormSchema;
