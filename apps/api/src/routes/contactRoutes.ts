import { Router } from "express";
import { contactController } from "../controllers/contactController";

const router = Router();

router.post("/contact", contactController.store);

export default router;
