import type { Request, Response } from "express"
import uploadImage from "../services/upload-image.service"
import { Messages } from "@repo/common";

export default async function uploadImageController(_: Request, res: Response) {
    try {
        const response = await uploadImage()

        res.json({ presignedurl: response.preSignedUrl, key: response.key })
    } catch (error) {
        console.error("Upload Image Controller Error:", error);

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