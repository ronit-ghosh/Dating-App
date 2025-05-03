import { unmatchValidation, ZodError } from "@repo/validation";
import type { Request, Response } from "express";
import handleUnmatch from "../services/handle-unmatch.service";
import { Messages } from "@repo/common";

export default async function handleUnmatchController(req: Request, res: Response) {
    try {
        const userId = req.userId!
        const parsedValues = unmatchValidation.safeParse(req.body)

        if (!parsedValues.success) {
            const error = parsedValues.error as ZodError
            res.json({ msg: error.issues.map(err => err.message) })
            return
        }

        handleUnmatch({ ...parsedValues.data, userId })
    } catch (error) {
        console.error("Handle Unmatch Controller Error:", error);

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