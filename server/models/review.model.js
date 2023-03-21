import mongoose from "mongoose";
const { Schema } = mongoose;

const ReviewSchema = new Schema(
  {},
  {
    timestamps: true,
  }
);

export default mongoose.model("Review", ReviewSchema);
