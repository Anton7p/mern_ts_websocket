import express from "express";
import auth from "../middleware/auth";
import categoryController from "../controller/category_controller";

const router = express.Router()



router.route('/category')
    .get(categoryController.getCategories)
    .post(auth, categoryController.createCategory)


router.route('/category/:id')
    .patch(auth, categoryController.updateCategory)
    .delete(auth, categoryController.deleteCategory)
export default router