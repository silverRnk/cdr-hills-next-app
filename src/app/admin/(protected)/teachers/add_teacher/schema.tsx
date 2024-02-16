import { z } from "zod";


const passwordSchema = z.string().min(8, { message: "Password must be at least 8 characters long" })
                                .max(20, { message: "Password must not exceed 20 characters" })
                                .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { 
                                    message: "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
                                });

const passwordConfirmationSchema = z.string();

export const teacherSchema = z.object({
    firstName: z.string().min(1, {message: "Required"}),
    middleName: z.string(),
    lastName: z.string().min(1, {message: 'Required'}),
    dateOfBirth: z.coerce.date(),
    gender: z.string(),
    addr1: z.string().min(1, {message: "Required"}),
    email: z.string()
    .min(1, {message: "Required"})
    .email({message: "Enter a Valid Email"}),
    phone: z.string().regex(/^\+(?:\d{1,3})?[ -]?\(?(?:\d{2,3})\)?[ -]?\d{3,4}[ -]?\d{4}$/),
    password: passwordSchema,
    passwordConfirmation: z.string()
})

