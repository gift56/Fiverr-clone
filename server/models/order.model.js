import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    gigId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", OrderSchema);
