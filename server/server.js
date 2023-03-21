import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.set("strictQuery", true);

try {
  await mongoose.connect(
    "mongodb+srv://efegift:efegift123@cluster0.jly2ewj.mongodb.net/?retryWrites=true&w=majority&dbname=fiverr"
  );
  console.log("Connected Successfully")
} catch (error) {
  console.error(error);
}

app.listen(8000, () => {
  console.log(`Server running on port http://localhost:${8000}`);
});
