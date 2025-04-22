import { Messages } from "@repo/common"
import { findNearbyUsers, prisma } from "@repo/db"
import type { LocationTypes } from "@repo/validation"

export default async function searchNearbyUsers(data: LocationTypes) {
    const { lng, lat } = data

    const nearbyUsers = await findNearbyUsers(lng, lat)

    const users = await Promise.all(
        nearbyUsers.map((user) => {
            return prisma.user.findFirst({
                where: {
                    id: user.id
                }
            })
        })
    )

    if (!users) throw new Error(Messages.ERROR.NEARBY_USERS_NOT_FOUND)

    return users
}