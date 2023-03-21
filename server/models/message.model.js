import mongoose from "mongoose";
const { Schema } = mongoose;

const MessageSchema = new Schema(
  {},
  {
    timestamps: true,
  }
);

export default mongoose.model("Message", MessageSchema);
