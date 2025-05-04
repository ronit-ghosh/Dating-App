import { locationValidation, ZodError } from "@lume/validation"
import type { Request, Response } from "express"
import { Messages } from "@lume/common"
import searchNearbyUsers from "../services/search-nearby-users.service";

export default async function searchNearbyUsersController(req: Request, res: Response) {
    try {
        const userId = req.userId!;
        
        const { lat, lng } = req.body;

        if (!lat || !lng) {
            res.status(400).json({ error: 'Missing location' });
            return
        }

        const parsedValues = locationValidation.safeParse({ lat, lng })

        if (!parsedValues.success) {
            const error = parsedValues.error as ZodError
            res.json({ msg: error.issues.map(err => err.message) })
            return
        }

        const profiles = await searchNearbyUsers({ ...parsedValues.data, userId })

        res.json({ profiles })
    } catch (error) {
        console.error("Search Nearby Users Controller Error:", error);

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