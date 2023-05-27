import express from "express";
import {  comment, deletePost, getAllPost, getPost } from "../controller/post.js";
import { createPost } from "../controller/post.js";
import { checkTokenMiddleWare } from "../middleware/middleware.js";
const router = express.Router();

router
  .route("/")
  .get(getAllPost)
  .post(createPost)
  .delete(deletePost);
  
router.route("/:id").put(comment).get(getPost);

export default router;