import { Messages } from "@repo/common";
import z from "zod";

const DobSchema = z
    .string()
    .transform((val) => new Date(val))
    .refine((date) => !isNaN(date.getTime()), {
        error: "Invalid date format",
    })
    .refine((date) => {
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        const hasHadBirthdayThisYear =
            today.getMonth() > date.getMonth() ||
            (today.getMonth() === date.getMonth() && today.getDate() >= date.getDate());

        return age > 18 || (age === 18 && hasHadBirthdayThisYear);
    }, {
        error: "You must be at least 18 years old",
    });

const GenderEnum = z.enum(["MALE", "FEMALE"], { error: "Gender must be Male or Female" });

export const locationValidation = z.object({
    lat: z.float64({ error: "Not a valid latitude!" }),
    lng: z.float64({ error: "Not a valid longitude!" })
})

export const createUserValidation = z.object({
    firstname: z
        .string({ error: Messages.ERROR.INVALID_STRING })
        .min(3, { error: "Firstname should be more 3 charaters long!" }),
    lastname: z
        .string({ error: Messages.ERROR.INVALID_STRING })
        .min(3, { error: "Lastname should be more 3 charaters long!" }),
    email: z
        .email({ error: "Input is not a valid email!" }),
    password: z
        .string({ error: Messages.ERROR.INVALID_STRING })
        .min(8, { error: "Password must be 8 characters long!" }),
    dob: DobSchema,
    age: z
        .number({ error: Messages.ERROR.INVALID_NUMBER })
        .min(2, { error: "Age is not valid!" }),
    gender: GenderEnum,
}).extend(locationValidation)