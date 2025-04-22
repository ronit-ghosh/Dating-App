import { locationValidation, ZodError } from "@repo/validation"
import type { Request, Response } from "express"
import searchNearbyUsers from "../services/search-nearby-users.service"
import { Messages } from "@repo/common"

export default async function searchNearbyUsersController(req: Request, res: Response) {
    try {
        const parsedValues = locationValidation.safeParse(req.body)

        if (!parsedValues.success) {
            const error = parsedValues.error as ZodError
            res.json({ msg: error.issues.map(err => err.message) })
            return
        }

        const nearbyUsers = await searchNearbyUsers(parsedValues.data)

        res.json({ nearbyUsers })
    } catch (error) {
        console.error("Create User Controller Error:", error);

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