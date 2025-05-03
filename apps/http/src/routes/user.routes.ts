import { Router } from "express";
import createUserController from "../controllers/create-user.controller";
import uploadImageController from "../controllers/get-presigned-url.controller";
import createPromptController from "../controllers/create-prompt.controller";
import saveImageUrlController from "../controllers/save-image.controller";
import createUserDetailsController from "../controllers/create-user-details.controller";

export const router = Router()

router.post("/create", createUserController);
router.post("/create-details", createUserDetailsController);
router.post("/create-prompt", createPromptController);
router.post("/create-image", saveImageUrlController);
router.get("/presignedurl", uploadImageController);