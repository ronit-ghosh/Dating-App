import { prisma } from "./db";

export async function findNearbyUsers(lng: number, lat: number, radius = 10000) {
    return prisma.$queryRawUnsafe(`
      SELECT u.id, u.name,
             ST_Distance(ul.location, ST_MakePoint($1, $2)::geography) AS distance
      FROM "User" u
      JOIN locations ul ON u.id = ul.user_id
      WHERE ST_DWithin(ul.location, ST_MakePoint($1, $2)::geography, $3)
      ORDER BY distance ASC
      LIMIT 20
    `, lng, lat, radius);
}