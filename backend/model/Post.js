import mongoose, { Schema } from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    text: {
      required: [true],
      type: String,
    },
    price: {
      type: String,
    },
    type: {
      type: String,
      enum: ["Franchise", "Repair", "Massage", "Relax", "Travel", "Health"],
    },
    locate: {
      type: String,
    },
    img: {
      type: String,
      default:
        "https://th.bing.com/th/id/R.62d692bc0756fa14b377d16321becff5?rik=634jbV4CU%2fejlg&riu=http%3a%2f%2fwww.scorpioshoes.com%2fimages%2fno_image.jpg&ehk=pAHrQBCDOliz4ILNXUHxs5ozRT8dr0yKYZEDYcImslo%3d&risl=&pid=ImgRaw&r=0",
    },
    rate: {
      type: String,
      required: [true],
      enum: ["0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"],
    },
    date: {
      type: Date,
      default: Date,
    },
    title: {
      required: [true],
      type: String,
      maxLength: [40, "Soo long.."],
    },
    user_id: {
      required: [true],
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    like: {
      type: Number,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
PostSchema.virtual("comment", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post_id",
});
const Post = mongoose.model("Post", PostSchema);
export default Post;
