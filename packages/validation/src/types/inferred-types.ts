import z from "zod";
import type { createUserValidation, locationValidation } from "./types";

export type CreateUserTypes = z.infer<typeof createUserValidation>
export type LocationTypes = z.infer<typeof locationValidation>