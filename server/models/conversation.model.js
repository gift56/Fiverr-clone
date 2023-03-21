import mongoose from "mongoose";
const { Schema } = mongoose;

const ConversationSchema = new Schema(
  {},
  {
    timestamps: true,
  }
);

export default mongoose.model("Conversation", ConversationSchema);
