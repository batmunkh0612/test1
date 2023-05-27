import express from "express";
import {
  comment,
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  login,
} from "../controller/user.js";

const routerUser = express.Router();

routerUser.get("/", getAllUser).post("/", createUser).post("/Login", login);
routerUser.route("/:id").delete(deleteUser).get(getUser).patch(comment);

export default routerUser;
