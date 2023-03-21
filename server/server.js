import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

const app = express();

mongoose.set("strictQuery", true);

try {
  await mongoose.connect(process.env.MONGO);
  console.log("Connected Successfully!");
} catch (error) {
  console.error(error);
}

app.listen(8000, () => {
  console.log(`Server running on port http://localhost:${8000}`);
});
