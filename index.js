import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import DataBaseConnection from "./config/DataBaseConnection.js";
import AuthRoute from "./routes/auth.js";
import HotelRoute from "./routes/hotels.js";
import cookieParser from "cookie-parser";
import UserRoute from "./routes/users.js";
import RoomRoute from "./routes/rooms.js";
const app = express();
const PORT = process.env.PORT || 1810;
app.use(cookieParser());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);

config();
DataBaseConnection();

app.use("/api/auth", AuthRoute);
app.use("/api/hotel", HotelRoute);
app.use("/api/rooms", RoomRoute);
app.use("/api/users", UserRoute);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
