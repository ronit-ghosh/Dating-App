import { Router } from "express";
import createUserController from "../controllers/create-user.controller";

export const router = Router()

router.post("/create", createUserController);