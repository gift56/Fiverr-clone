import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).send("User not authenticated!");
  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (payload.id !== user._id) {
      return res.status(403).send("You can delete only your account!");
    }
    await User.findByIdAndDelete(req.params.id);
  });
};
