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
    starNumber: {
      type: Number,
      required,
    },
    cat: {
      type: String,
      required,
    },
    price: {
      type: Number,
      required,
    },
    cover: {
      type: String,
      required,
    },
    images: {
      type: [String],
      required,
    },
    shortTitle: {
      type: String,
      required,
    },
    shortDesc: {
      type: String,
      required,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gig", GigSchema);
