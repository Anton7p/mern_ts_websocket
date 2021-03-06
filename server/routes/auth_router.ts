import express from "express";
import authController from "../controller/auth_controller";

import {validRegister} from "../middleware/valid";

const router = express.Router()

router.post('/register', validRegister, authController.register)
router.post('/active', authController.activeAccount)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
router.get('/refresh_token', authController.refreshToken)
router.post('/google_login', authController.googleLogin)

export default router