import mongoose, { Schema } from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    required: [true],
    type: String,
  },
  post_id: {
    required: [true],
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  user_id: {
    type: String,
    required: [true, "Please login"],
  },
  date: {
    type: Date,
    default: Date,
  },
});
const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;
