import { Messages } from "@repo/common";
import { prisma } from "@repo/db";

export default async function handleChat(data: any) {
    const { canChat, matchId } = data
    if (canChat === false) return

    const response = await prisma.match.update({
        where: {
            id: matchId
        },
        data: {
            chat: true
        }
    })

    if (!response) throw new Error(Messages.ERROR.ERROR_UPDATING_MATCH)

    return true

}
