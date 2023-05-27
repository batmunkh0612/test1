import User from "../model/User.js";
export const checkRole = (req, res, next) => {
  try {
    const admin = req.body.role;

    if (admin === "admin") {
      next();
    } else {
      console.log("aldaa");
    }
  } catch (error) {}
}