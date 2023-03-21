import mongoose from "mongoose";
const { Schema } = mongoose;

const GigSchema = new Schema(
  {
    userId: {
      type: String,
      required,
    },
    title: {
      type: String,
      required,
    },
    desc: {
      type: String,
      required,
    },
    totalStars: {
      type: Number,
      required,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gig", GigSchema);
