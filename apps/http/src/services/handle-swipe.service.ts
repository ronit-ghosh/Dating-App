import { Messages } from "@repo/common";
import { prisma, redis } from "@repo/db";
import type { SwipeDataTypes } from "@repo/validation";

interface DataTypes extends SwipeDataTypes {
    userId: string
}

export default async function handleSwipe(data: DataTypes) {
    const { targetId, matched, userId } = data

    // Add to bloom filter
    redis.bf.add(`seen_profiles:${userId}`, targetId.toString())
        .catch(err => console.error('Failed to add to Bloom filter:', err));

    const [userAId, userBId] = [userId, targetId].sort();

    if (matched === true) {
        const response = await prisma.match.upsert({
            where: {
                userAId_userBId: {
                    userAId,
                    userBId,
                },
            },
            update: {},
            create: {
                userAId,
                userBId,
            },
        });

        if (!response) throw new Error(Messages.ERROR.ERROR_UPDATING_MATCH)
    }

    return true
}