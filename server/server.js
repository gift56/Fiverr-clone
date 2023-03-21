import express from "express";
import mongoose from "mongoose";

const app = express();

try {
  await mongoose.connect(
    "mongodb+srv://efegift:<password>@cluster0.jly2ewj.mongodb.net/?retryWrites=true&w=majority"
  );
} catch (error) {
  handleError(error);
}

app.listen(8000, () => {
  console.log(`Server running on port http://localhost:${8000}`);
});
