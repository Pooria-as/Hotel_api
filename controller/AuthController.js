import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//Register User
export const Register = async (req, res) => {
  const { username, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const HashedPassword = await bcrypt.hashSync(password, salt);
  try {
    const newUser = new User({
      username,
      email,
      password: HashedPassword,
    });
    await newUser.save();
    return res.status(200).send("Success");
  } catch (error) {
    return res.status(500).send(error);
  }
};

//Login User
export const Login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const findUser = await User.findOne({ username });
    const checkPassword = bcrypt.compare(password, findUser.password);

    if (!findUser) {
      return res.status(404).send("User not found ! ");
    }
    if (!checkPassword) {
      return res.status(403).send("Password is incorrect ! ");
    }

    const token = jwt.sign(
      {
        id: findUser._id,
        username: findUser.username,
        IsAdmin: findUser.isAdmin,
      },
      process.env.JWTSECRET
    );
    //@todo save cookie
    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .send({ username: findUser.username, isAdmin: findUser.isAdmin, token });
  } catch (error) {
    return res.status(500).send("error accured from server user not found");
  }
};
