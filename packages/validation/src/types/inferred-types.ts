import z from "zod";
import type { createUserValidation, locationValidation, userDetailsValidation } from "./types";

export type CreateUserTypes = z.infer<typeof createUserValidation>
export type LocationTypes = z.infer<typeof locationValidation>
export type UserDetailsTypes = z.infer<typeof userDetailsValidation>