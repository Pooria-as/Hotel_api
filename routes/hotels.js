import express from "express";
import {
  CreateHotel,
  DeleteHotel,
  GetHotelById,
  GetHotels,
  UpdateHotel,
} from "../controller/HotelController.js";
import { verifyAdmin } from "../middleware/Auth.js";

const HotelRoute = express.Router();

HotelRoute.post("/", verifyAdmin, CreateHotel);
HotelRoute.put("/:id", verifyAdmin, UpdateHotel);
HotelRoute.delete("/:id", verifyAdmin, DeleteHotel);
HotelRoute.get("/:id", GetHotelById);
HotelRoute.get("/", GetHotels);

export default HotelRoute;
