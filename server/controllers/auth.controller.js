import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("Registration Successful.");
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).send("User not found!");
    const isCorrectPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isCorrectPassword) return res.status(400).send("Invalid credentials!");

    const token = jwt.sign({
      id: user._id,
      isSeller: user.isSeller,
    });

    const { password, ...info } = user._doc;
    res.status(200).send(info);
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
};

export const logout = async (req, res) => {};
