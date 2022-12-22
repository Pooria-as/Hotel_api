import Hotel from "../models/Hotel.js";



// CREATE HOTEL
export const CreateHotel = async (req, res) => {
  try {
    const newHotel = new Hotel(req.body);
    await newHotel.save();
    return res
      .status(200)
      .send({ message: "new hotel created", body: newHotel });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// GET HOTEL BY ID
export const GetHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    return res.status(200).send(hotel);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// GET ALL HOTEL
export const GetHotels = async (req, res) => {
  try {
    const hotel = await Hotel.find();
    return res.status(200).send(hotel);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// UPDATE HOTEL
export const UpdateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).send({ message: "Hotel Has been updated", hotel });
  } catch (error) {
    return res.status(500).send(error);
  }
};


// DELETE HOTEL
export const DeleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    return res.status(200).send({ message: "Hotel Has been deleted" });
  } catch (error) {
    return res.status(500).send(error);
  }
};
