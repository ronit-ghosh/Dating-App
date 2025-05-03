import type { LocationTypes } from "@repo/validation"
import { findNearbyUsers, prisma, redis } from "@repo/db";

interface Datatypes extends LocationTypes {
    userId: string
}

export default async function searchNearbyUsers(data: Datatypes) {
    const { lat, lng, userId } = data

    const redisBFKey = `seen_profiles:${userId}`;

    // Ensure Bloomredis exists
    await redis.bf.reserve(redisBFKey, 0.01, 1000000).catch(() => { })

    // preventing from seeing own profile
    await redis.bf.add(`seen_profiles:${userId}`, userId.toString())

    const nearbyUsers = await findNearbyUsers(lng, lat, 5000)

    const ids = nearbyUsers.map(user => user.id.toString());

    if (ids.length === 0) return []

    // Check which are unseen profiles
    const results = await redis.bf.mExists(redisBFKey, ids);
    const unseenIds = ids.filter((id, index) => results[index] === false); // filter the seen profiles

    if (unseenIds.length === 0) return []

    const profiles = await prisma.user.findMany({
        where: {
            id: { in: unseenIds }
        },
        take: 20,
        select: {
            id: true,
            email: true,
            firstname: true,
            lastname: true,
        }
    });

    return profiles
}