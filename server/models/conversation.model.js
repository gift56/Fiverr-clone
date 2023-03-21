import mongoose from "mongoose";
const { Schema } = mongoose;

const ConversationSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    sellerId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Conversation", ConversationSchema);
