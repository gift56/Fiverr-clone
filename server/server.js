import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected Successfully!");
  } catch (error) {
    console.error(error);
  }
};

app.listen(8000, () => {
  connectMongodb();
  console.log(`Server running on port http://localhost:${8000}`);
});
