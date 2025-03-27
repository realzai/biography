// apps/api/src/routes/assetsRoutes.ts
import { Router } from "express";
import { assetsController } from "../controllers/assetsController";

const router = Router();

router.get("/profile_picture", assetsController.getProfilePicture);

export default router;
