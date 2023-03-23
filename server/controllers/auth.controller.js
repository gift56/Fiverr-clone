import User from "../models/user.model.js";
import bcrypt from "bcrypt";

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
    if(!user) return res.status(404).send("User not found!")
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
};

export const logout = async (req, res) => {};
