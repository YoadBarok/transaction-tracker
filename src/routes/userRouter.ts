import { Router } from "express";
import { userController } from "../controllers/userController";


export const router = Router();

router.post('/save-new', userController.saveNew)
router.get('/verify/:verificationToken', userController.verify)