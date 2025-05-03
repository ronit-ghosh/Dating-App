import { Messages } from "@repo/common";
import { prisma } from "@repo/db";
import type { EmailPasswordTypes } from "@repo/validation";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default async function signin(data: EmailPasswordTypes) {
    const secret = process.env.JWT_SECRET as string
    if (!secret) throw new Error(Messages.ERROR.JWT_SECRET_MISSING)

    const { email, password } = data

    const userExists = await prisma.user.findFirst({
        where: {
            email
        },
        select: {
            id: true,
            email: true,
            password: true
        }
    })

    if (!userExists) throw new Error(Messages.ERROR.USER_NOT_FOUND)

    const compare = bcrypt.compareSync(password, userExists.password)

    if (!compare) throw new Error(Messages.ERROR.WRONG_PASSWORD)

    const token = jwt.sign({ userId: userExists.id }, secret)

    return token
}