import authRouter from "./auth_router";
import userRouter from "./user_router";
import categoryRouter from "./category_router";
import blogRouter from "./blog_router";
import commentRouter from "./comment_router";

const routes = {
    authRouter,
    userRouter,
    blogRouter,
    categoryRouter,
    commentRouter
}

export default routes