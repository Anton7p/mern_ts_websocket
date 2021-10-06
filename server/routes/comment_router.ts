import express from "express";
import commentController from "../controller/comment_contoller";
import auth from "../middleware/auth";


const router = express.Router()


router.post('/comment', auth, commentController.createComment)
router.post('/reply_comment', auth, commentController.replyComment)
router.get('/comments/blog/:id', commentController.getComments)


router.patch('/comment/:id', auth, commentController.updateComment)
router.delete('/comment/:id', auth, commentController.deleteComment)

export default router