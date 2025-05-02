import z from "zod";
import type {
    canChatValidation,
    createPromptValidation,
    createUserValidation,
    locationValidation,
    swipeDataValidation,
    unmatchValidation,
    userDetailsValidation
} from "./types";

export type CreateUserTypes = z.infer<typeof createUserValidation>
export type LocationTypes = z.infer<typeof locationValidation>
export type UserDetailsTypes = z.infer<typeof userDetailsValidation>
export type SwipeDataTypes = z.infer<typeof swipeDataValidation>
export type UnmatchDataTypes = z.infer<typeof unmatchValidation>
export type CreatePromptsTypes = z.infer<typeof createPromptValidation>
export type CanChatTypes = z.infer<typeof canChatValidation>