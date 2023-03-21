import mongoose from "mongoose";
const { Schema } = mongoose;

const GigSchema = new Schema(
  {},
  {
    timestamps: true,
  }
);

export default mongoose.model("Gig", GigSchema);
