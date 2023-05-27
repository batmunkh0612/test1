import express from "express";
import {
  createComment,
  deleteComment,
  getAllComment,
  getComment,
} from "../controller/comment.js";
const routerComment = express.Router();

routerComment
  .route("/")
  .get(getAllComment)
  .post(createComment)
  .delete(deleteComment);

routerComment.route("/:id").get(getComment);

export default routerComment;
