import type { LocationTypes } from "@repo/validation"
import { findNearbyUsers, prisma, redis } from "@repo/db";

interface Datatypes extends LocationTypes {
    userId: string
}

export default async function searchNearbyUsers(data: Datatypes) {
    const { lat, lng, userId } = data

    const redisKey = `seen_profiles:${userId}`;

    // Ensure Bloomredis exists
    await redis.call('BF.RESERVE', redisKey, 0.001, 1000000).catch(() => { });

    const nearbyUsers = await findNearbyUsers(lng, lat, 5000)

    const ids = nearbyUsers.map(user => user.id.toString());

    if (ids.length === 0) return []

    // Check which are unseen profiles 
    const results: number[] = await redis.call('BF.MEXISTS', redisKey, ...ids) as number[];
    const unseenIds = ids.filter((id, index) => results[index] === 0);

    if (unseenIds.length === 0) return []

    const profiles = await prisma.user.findMany({
        where: {
            id: { in: unseenIds }
        },
        take: 20,
        select: {
            id: true
        },
    });

    return profiles
}