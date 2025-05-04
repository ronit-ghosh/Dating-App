import { Messages } from "@lume/common"
import { createUserLocation, prisma } from "@lume/db"
import type { CreateUserTypes } from "@lume/validation"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default async function createUser(data: CreateUserTypes) {
    const secret = process.env.JWT_SECRET as string
    if (!secret) throw new Error(Messages.ERROR.JWT_SECRET_MISSING)

    const { firstname, lastname, dob, password, email, lat, lng } = data
    const saltRounds = 10;

    const existingUser = await prisma.user.findFirst({ where: { email } })

    if (existingUser) throw new Error(Messages.ERROR.USER_ALREADY_EXISTS)

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const { id } = await prisma.user.create({
        data: {
            firstname,
            lastname,
            dob,
            email,
            password: hash
        },
        select: {
            id: true
        }
    })

    if (!id) throw new Error(Messages.ERROR.USER_NOT_CREATED)

    const response = await createUserLocation(id, lat, lng)

    if (!response) {
        await prisma.user.delete({
            where: {
                id
            }
        })
        throw new Error(Messages.ERROR.USER_LOCATION_NOT_CREATED)
    }

    const token = jwt.sign({ userId: id }, secret, {
        algorithm: "RS256",
        expiresIn: 60 * 24 * 2
    })

    return { id, token }
}