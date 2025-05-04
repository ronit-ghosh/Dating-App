import { Messages } from "@lume/common"
import { prisma } from "@lume/db"
import type { UserDetailsTypes } from "@lume/validation"

interface DataTypes extends UserDetailsTypes {
    userId: string
}

export default async function createUserDetails(data: DataTypes) {
    const existingUser = await prisma.user.findFirst({ where: { id: data.userId } })

    if (!existingUser) throw new Error(Messages.ERROR.USER_NOT_FOUND)

    const response = await prisma.userDetails.create({
        data,
        select: {
            userId: true
        }
    })

    if (!response) throw new Error(Messages.ERROR.USER_DETAILS_NOT_CREATED)

    return response.userId
}