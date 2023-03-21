import mongoose from "mongoose";
const { Schema } = mongoose;

const MessageSchema = new Schema(
  {
    ConversationId: {
      type: String,
      requires: true,
    },
    UserId: {
      type: String,
      requires: true,
    },
    desc: {
      type: String,
      requires: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Message", MessageSchema);
