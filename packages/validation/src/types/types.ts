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

export const emailPasswordValidation = z.object({
    email: z
        .email({ error: "Input is not a valid email!" }),
    password: z
        .string({ error: Messages.ERROR.INVALID_STRING })
        .min(8, { error: "Password must be 8 characters long!" }),
})

export const createUserValidation = z.object({
    firstname: z
        .string({ error: Messages.ERROR.INVALID_STRING })
        .min(3, { error: "Firstname should be more 3 charaters long!" }),
    lastname: z
        .string({ error: Messages.ERROR.INVALID_STRING })
        .min(3, { error: "Lastname should be more 3 charaters long!" }),
    dob: DobSchema
}).extend(locationValidation).extend(emailPasswordValidation)

export const userDetailsValidation = z.object({
    gender: GenderEnum,
    datingGender: GenderEnum,
    sexuality: z.string({ error: Messages.ERROR.INVALID_STRING }),
    datingIntention: z.string({ error: Messages.ERROR.INVALID_STRING }),
    relationshipType: z.string({ error: Messages.ERROR.INVALID_STRING }),
    work: z.string({ error: Messages.ERROR.INVALID_STRING }),
    jobTitle: z.string({ error: Messages.ERROR.INVALID_STRING }),
    college: z.string({ error: Messages.ERROR.INVALID_STRING }),
    highestDegree: z.string({ error: Messages.ERROR.INVALID_STRING }),
    drink: z.boolean({ error: Messages.ERROR.INVALID_BOOLEAN }),
    tobacco: z.boolean({ error: Messages.ERROR.INVALID_BOOLEAN }),
    weed: z.boolean({ error: Messages.ERROR.INVALID_BOOLEAN }),
    drugs: z.boolean({ error: Messages.ERROR.INVALID_BOOLEAN })
})

export const swipeDataValidation = z.object({
    matched: z.boolean({ error: Messages.ERROR.INVALID_BOOLEAN }),
    targetId: z.string({ error: Messages.ERROR.INVALID_STRING })
})

export const unmatchValidation = z.object({
    matched: z.boolean({ error: Messages.ERROR.INVALID_BOOLEAN }),
    matchId: z.string({ error: Messages.ERROR.INVALID_STRING })
})

export const createPromptValidation = z.object({
    title: z.string({ error: Messages.ERROR.INVALID_STRING }),
    desc: z.string({ error: Messages.ERROR.INVALID_STRING })
})

export const canChatValidation = z.object({
    canChat: z.boolean({ error: Messages.ERROR.INVALID_BOOLEAN }),
    matchId: z.string({ error: Messages.ERROR.INVALID_STRING })
})