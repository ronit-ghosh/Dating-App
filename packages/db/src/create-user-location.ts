import { prisma } from ".";

export async function createUserLocation(userId: string, lat: number, lng: number) {
  return prisma.$executeRawUnsafe(`
    INSERT INTO locations (user_id, location)
    VALUES ($1, ST_SetSRID(ST_MakePoint($2, $3), 4326))
    ON CONFLICT (user_id)
    DO UPDATE SET location = ST_SetSRID(ST_MakePoint($2, $3), 4326)
  `, userId, lng, lat);
}