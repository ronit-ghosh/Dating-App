import { Messages } from "@repo/common"
import { createUserLocation, prisma } from "@repo/db"
import type { CreateUserTypes } from "@repo/validation"

export default async function createUser(data: CreateUserTypes) {
    const { email, lat, lng } = data

    const existingUser = await prisma.user.findFirst({ where: { email } })

    if (existingUser) throw new Error(Messages.ERROR.USER_ALREADY_EXISTS)

    const { id } = await prisma.user.create({
        data,
        select: {
            id: true
        }
    })

    if (!id) throw new Error(Messages.ERROR.USER_NOT_CREATED)

    const response = await createUserLocation(id, lat, lng)

    if (!response) throw new Error(Messages.ERROR.USER_LOCATION_NOT_CREATED)

    return id
}