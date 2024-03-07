import { z } from "zod";

const loginUserFormSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z
        .string()
        .regex(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?:([0-9a-zA-Z])){8,}$/,
            "Deve ter ao menos 8 caracteres, letra maiúscula, minúscula e número"
        ),
});

export default loginUserFormSchema;
