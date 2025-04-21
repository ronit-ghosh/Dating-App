import { PrismaClient } from "../prisma/generated"

export const prisma = new PrismaClient()
export * from "./create-user-location"
export * from "./find-nearby-users"