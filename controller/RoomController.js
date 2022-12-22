import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

// CREATE Room
export const CreateRoom = async (req, res) => {
  const HotelId = req.params.HotelId;
  const newRoom = new Room(req.body);

  try {
    const saveRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(HotelId, {
        $push: { rooms: newRoom._id },
      });
    } catch (error) {
      return res.status(500).send("room id error");
    }
    return res.json(saveRoom);
  } catch (error) {
    return res.status(403).send("500 Server Error");
  }
};

// GET Room BY ID
export const GetRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    return res.status(200).send(room);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// GET ALL Room
export const GetRooms = async (req, res) => {
  try {
    const room = await Room.find();
    return res.status(200).send(room);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// UPDATE Room
export const UpdateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).send({ message: "Room Has been updated", room });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// DELETE Room
export const DeleteRoom = async (req, res) => {
  const HotelId = req.params.HotelId; 
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(HotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      return res.status(500).send("room id error");
    }
    return res.status(200).send({ message: "Room Has been deleted" });
  } catch (error) {
    return res.status(500).send(error);
  }
};
