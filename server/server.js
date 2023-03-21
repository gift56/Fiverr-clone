import express from "express";
import mongoose from "mongoose";

const app = express();

try {
  await mongoose.connect(
    "mongodb+srv://efegift:{admind}567@cluster0.jly2ewj.mongodb.net/?retryWrites=true&w=majority&dbname=fiverr"
  );
} catch (error) {
  handleError(error);
}

app.listen(8000, () => {
  console.log(`Server running on port http://localhost:${8000}`);
});
