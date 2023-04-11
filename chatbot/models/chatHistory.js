const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatHistorySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
    message: { type: String, required: true },
    from: { type: String, required: true }
  },
  { versionKey: false, timestamps: true, collection: "messages" }
);

const ChatHistory = mongoose.model("messages", chatHistorySchema);

module.exports = ChatHistory;