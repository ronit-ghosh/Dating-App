import { Messages } from "@lume/common";
import { prisma } from "@lume/db";
import type { UnmatchDataTypes } from "@lume/validation";

interface DataTypes extends UnmatchDataTypes {
    userId: string
}

export default async function handleUnmatch(data: DataTypes) {
    const { matched, userId, matchId } = data

    if (matched === true) return

    const response = await prisma.match.update({
        where: {
            id: matchId
        },
        data: {
            active: false,
            chat: false,
            unMatchedBy: userId
        }
    })

    if (!response) throw new Error(Messages.ERROR.ERROR_UPDATING_MATCH)

    return true
}