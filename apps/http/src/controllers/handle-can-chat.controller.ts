import type { Request, Response } from "express";
import { canChatValidation, ZodError } from "@repo/validation";
import handleCanChat from "../services/handle-chat.service";
import { Messages } from "@repo/common";


export default async function handleCanChatController(req: Request, res: Response) {
    try {
        const parsedValues = canChatValidation.safeParse(req.body)

        if (!parsedValues.success) {
            const error = parsedValues.error as ZodError
            res.json({ msg: error.issues.map(err => err.message) })
            return
        }

        handleCanChat(parsedValues.data)
    } catch (error) {
        console.error("Handle Chat Controller Error:", error);

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