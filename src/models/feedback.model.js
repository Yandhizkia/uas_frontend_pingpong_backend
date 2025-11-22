import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    subject: { type: String, required: true },
    category: { type: String, required: true },
    message: { type: String, required: true },

    // admin reply
    reply: { type: String, default: "" },
    status: { type: String, default: "pending" }, // pending | replied
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", FeedbackSchema);
