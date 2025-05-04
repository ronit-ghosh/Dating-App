import { Messages } from "@lume/common";
import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken"

interface MyJwtPayload extends JwtPayload {
    userId: string;
}

export default async function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const secret = process.env.JWT_SECRET as string
        if (!secret) throw new Error(Messages.ERROR.JWT_SECRET_MISSING)

        const authHeader = req.headers.authorization
        console.log("This is the auth header ", authHeader)

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401)
                .json({ msg: Messages.ERROR.INVALID_AUTH_HEADER })
            return
        }

        const token = authHeader.split(" ")[1]

        const decoded = jwt.verify(token, secret) as MyJwtPayload
        console.log("This is decoded ", decoded)

        if (!decoded || !decoded.userId) {
            res.json(Messages.ERROR.UNAUTHORIZED)
            return
        }

        req.userId = decoded.userId
        next()
    } catch (error) {
        res.status(500)
            .json({ msg: Messages.ERROR.INTERNAL_SERVER_ERROR })
        console.error("Auth Middleware Error", error)
    }
}