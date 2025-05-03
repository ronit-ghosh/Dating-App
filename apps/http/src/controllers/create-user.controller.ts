import { createUserValidation, ZodError } from "@repo/validation";
import type { Request, Response } from "express";
import createUser from "../services/create-user.service";
import { Messages } from "@repo/common";

export default async function createUserController(req: Request, res: Response) {
    try {
        const parsedValues = createUserValidation.safeParse(req.body)

        if (!parsedValues.success) {
            const error = parsedValues.error as ZodError
            res.json({ msg: error.issues.map(err => err.message) })
            return
        }

        const { id, token } = await createUser(parsedValues.data)

        res.json({ userId: id, token })
    } catch (error) {
        console.error("Create User Controller Error:", error);

        const knownErrors = Object.values(Messages.ERROR)

        if (knownErrors.includes((error as Error).message)) {
            let status = 400;

            if ((error as Error).message === Messages.ERROR.UNAUTHORIZED) status = 401;
            if ((error as Error).message === Messages.ERROR.INTERNAL_SERVER_ERROR) status = 500;

            res.status(status).json({ msg: (error as Error).message });
            return
        }

        res.status(500)
            .json({ msg: "Something went wrong", error: (error as Error).message });
    }
}