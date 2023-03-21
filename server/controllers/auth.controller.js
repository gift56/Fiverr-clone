import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const newUser = new User({
      username: "string",
      email: "string@string.com",
      password: "string",
      country: "string",
    });
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};
