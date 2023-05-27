import mongoose, { Schema } from "mongoose";

const AdSchema = new mongoose.Schema({
  text: {
    required: [true],
    type: String,
  },
  image: {
    required: [true],
    type: String,
  },
  date: {
    type: Date,
    default: Date,
  },
});
const Ad = mongoose.model("Ad", AdSchema);
export default Ad;
