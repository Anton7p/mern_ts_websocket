import express from "express";
import blogController from "../controller/blog_controller";
import auth from "../middleware/auth";

const router = express.Router()

router.post('/blog', auth, blogController.createBlog)
router.get('/home/blogs', blogController.getHomeBlogs)
router.get('/blogs/category/:id', blogController.getBlogsByCategory)
router.get('/blogs/user/:id', blogController.getBlogsByUser)
router.get('/blog/:id', blogController.getBlog)


export default router