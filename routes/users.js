import express from "express";
import {
  DeleteUser,
  GetUserById,
  GetUsers,
  UpdatUser,
} from "../controller/UserController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../middleware/Auth.js";

const UserRoute = express.Router();

// UserRoute.get("/checkUser", verifyToken, (req, res) => {
//   return res.status(200).send("success");
// });

// UserRoute.get("/checkUser/:id", verifyUser, (req, res) => {
//   return res.status(200).send("success");
// });

// UserRoute.get("/checkAdmin/:id", verifyAdmin, (req, res) => {
//   return res.status(200).send("you are admin you can do what you wanna");
// });

UserRoute.get("/:id", verifyUser, GetUserById);
UserRoute.put("/:id", verifyUser, UpdatUser);
UserRoute.delete("/:id", verifyUser, DeleteUser);
UserRoute.get("/", verifyAdmin, GetUsers);

export default UserRoute;
