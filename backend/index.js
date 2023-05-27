import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRouter from "./router/post.js";
import commentRouter from "./router/comment.js";
import adRouter from "./router/ad.js";
import routerUser from "./router/user.js";

dotenv.config();

const uri = process.env.MONGO_URI || "";
const port = process.env.PORT || 6969;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/post", postRouter);
app.use("/user", routerUser);
app.use("/comment", commentRouter);
app.use("/ad", adRouter);

// Database Connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, {});
    console.log("Connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};

app.get('/', (req, res) => {
  res.json("test");
});
// Start the server
app.listen(port, async () => {
  await connectToDatabase();
  console.log(`Server is running on port ${ port }`);
});

module.exports = app;
