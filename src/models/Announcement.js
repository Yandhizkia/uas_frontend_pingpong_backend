import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },

  title: { type: String, required: true, trim: true },
  message: { type: String, required: true },

  type: {
    type: String,
    enum: ["info", "warning", "urgent"],
    required: true
  },

  date: {
    type: String,
    required: true,
    default: () => new Date().toLocaleDateString("en-GB")
  },

  time: {
    type: String,
    required: true,
    default: () => new Date().toLocaleTimeString("en-GB", { hour12: false })
  },

  important: {
    type: Boolean,
    default: false
  },

  // ⬇ Field baru untuk status terbaca
  read: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("Announcement", AnnouncementSchema);
