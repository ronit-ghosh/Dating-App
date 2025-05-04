import { Messages } from "@lume/common";
import { prisma } from "@lume/db";
import type { CanChatTypes } from "@lume/validation";

export default async function handleCanChat(data: CanChatTypes) {
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
