import mongoose from "mongoose";

const NextEventSectionSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  image: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^data:image\/(png|jpg|jpeg);base64,/.test(v);
      },
      message: "Image must be a valid base64 string with MIME type."
    }
  },
  fullDescription: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true }
});

export default mongoose.model("NextEventSection", NextEventSectionSchema);
