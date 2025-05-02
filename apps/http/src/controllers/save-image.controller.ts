import { Messages } from "@repo/common";
import type { Request, Response } from "express"
import saveImageUrl from "../services/save-image-url.service";

export default async function saveImageUrlController(req: Request, res: Response) {
    try {
        const userId = req.userId!
        const imageUrl = req.body.imageUrl

        if (!imageUrl || typeof imageUrl !== "string") {
            res.json(400)
                .json({ msg: Messages.ERROR.INVALID_STRING })
            return
        }

        saveImageUrl({ userId, imageUrl })
    } catch (error) {
        console.error("Search Nearby Users Controller Error:", error);

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