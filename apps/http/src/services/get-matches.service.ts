import { Messages } from "@lume/common"
import { prisma } from "@lume/db"

export default async function getMatches(userId: string) {
    const response = await prisma.match.findMany({
        where: { userBId: userId },
        select: {
            userA: {
                select: {
                    firstname: true
                }
            }
        }
    })

    if (!response) throw new Error(Messages.ERROR.USER_NOT_FOUND)

    const profiles = response.map(user => user.userA)
    return profiles
}