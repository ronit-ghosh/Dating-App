import { Router } from "express";
import createUserController from "../controllers/create-user.controller";
import uploadImageController from "../controllers/get-presigned-url.controller";

export const router = Router()

router.post("/create", createUserController);
router.post("/presignedurl", uploadImageController)