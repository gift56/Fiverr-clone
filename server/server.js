import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import converstionRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";

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

app.use("/api/user", userRoute);

app.listen(8000, () => {
  connectMongodb();
  console.log(`Server running on port http://localhost:${8000}`);
});
