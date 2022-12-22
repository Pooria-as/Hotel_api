import User from "../models/User.js";

// GET USER BY ID
export const GetUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// GET ALL User
export const GetUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// UPDATE User
export const UpdatUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).send({ message: "User Has been updated", users });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// DELETE User
export const DeleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).send({ message: "User Has been deleted" });
  } catch (error) {
    return res.status(500).send(error);
  }
};
