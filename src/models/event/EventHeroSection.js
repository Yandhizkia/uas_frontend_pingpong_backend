import mongoose from "mongoose";

const EventHeroSectionSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  // image tetap string karena menyimpan base64
  image: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // validasi ringan untuk base64
        return /^data:image\/(png|jpg|jpeg);base64,/.test(v);
      },
      message: "Image must be a valid base64 string with MIME type."
    }
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  }
});

export default mongoose.model("EventHeroSection", EventHeroSectionSchema);
