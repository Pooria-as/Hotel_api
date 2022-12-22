import express from "express";
import {
  CreateRoom,
  DeleteRoom,
  GetRoomById,
  GetRooms,
  UpdateRoom,
} from "../controller/RoomController.js";
import { verifyAdmin } from "../middleware/Auth.js";

const RoomRoute = express.Router();

RoomRoute.post("/:HotelId", verifyAdmin, CreateRoom);
RoomRoute.put("/:id", verifyAdmin, UpdateRoom);
RoomRoute.delete("/:id/:HotelId", verifyAdmin, DeleteRoom);
RoomRoute.get("/:id", GetRoomById);
RoomRoute.get("/", GetRooms);

export default RoomRoute;
