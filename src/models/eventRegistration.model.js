// models/eventRegistration.model.js
import mongoose from "mongoose";

const userInfoSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  username: String,
  role: String,
}, { _id: false });

const eventInfoSchema = new mongoose.Schema({
  event_id: { type: mongoose.Schema.Types.ObjectId, ref: "QuickEvent" },
  title: String,
  date: String,
  time: String,
  location: String,
  type: String,
  recurringWeekly: Boolean,
}, { _id: false });

const eventRegistrationSchema = new mongoose.Schema({
  userInfo: userInfoSchema,
  eventInfo: eventInfoSchema,

  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Approved", "Rejected"]
  },

  created_at: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("EventRegistration", eventRegistrationSchema);
