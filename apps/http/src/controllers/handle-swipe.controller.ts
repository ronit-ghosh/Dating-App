import { swipeDataValidation, ZodError } from "@repo/validation";
import type { Request, Response } from "express";
import handleSwipe from "../services/handle-swipe.service";
import { Messages } from "@repo/common";

export default async function handleSwipeController(req: Request, res: Response) {
    try {
        // @ts-ignore
        const userId = req.userId;
        const parsedValues = swipeDataValidation.safeParse(req.body)

        if (!parsedValues.success) {
            const error = parsedValues.error as ZodError
            res.json({ msg: error.issues.map(err => err.message) })
            return
        }

        handleSwipe({ ...parsedValues.data, userId })
    } catch (error) {
        console.error("Search User Controller Error:", error);

        const knownErrors = Object.values(Messages.ERROR)

        if (knownErrors.includes((error as Error).message)) {
            let status = 400;

            if ((error as Error).message === Messages.ERROR.UNAUTHORIZED) status = 403;
            if ((error as Error).message === Messages.ERROR.INTERNAL_SERVER_ERROR) status = 500;

            res.status(status).json({ msg: (error as Error).message });
            return
        }

        res.status(500)
            .json({ msg: "Something went wrong", error: (error as Error).message });
    }
}