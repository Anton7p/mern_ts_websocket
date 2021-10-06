import express from "express";
import auth from "../middleware/auth";
import userController from "../controller/user_controller";

const router = express.Router()

router.patch('/user', auth, userController.updateUser)
router.get('/user/:id',  userController.getUser)
router.patch('/reset_password', auth, userController.resetPassword)


export default router