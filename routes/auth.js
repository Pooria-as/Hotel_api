import express from "express";
import { Register, Login } from "../controller/AuthController.js";

const AuthRoute = express.Router();

AuthRoute.post("/Register", Register);
AuthRoute.post("/Login", Login);

export default AuthRoute;
