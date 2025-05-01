import { PrismaClient } from "../generated"

export const prisma = new PrismaClient()
export * from "./create-user-location"
export * from "./find-nearby-users"
export { default as redis } from './redis'