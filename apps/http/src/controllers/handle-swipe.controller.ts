import { swipeDataValidation, ZodError } from "@lume/validation";
import type { Request, Response } from "express";
import handleSwipe from "../services/handle-swipe.service";
import { Messages } from "@lume/common";

export default async function handleSwipeController(req: Request, res: Response) {
    try {
        const userId = req.userId!;

        const parsedValues = swipeDataValidation.safeParse(req.body)

        if (!parsedValues.success) {
            const error = parsedValues.error as ZodError
            res.json({ msg: error.issues.map(err => err.message) })
            return
        }

        handleSwipe({ ...parsedValues.data, userId })

        res.json({ msg: "Updated" })
    } catch (error) {
        console.error("Handle Swipe Controller Error:", error);

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