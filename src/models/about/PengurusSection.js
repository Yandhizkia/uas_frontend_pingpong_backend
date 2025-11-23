import mongoose from "mongoose";

const PengurusSectionSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  shortDescription: String,
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
  fullDescription: String,
});

export default mongoose.model("PengurusSection", PengurusSectionSchema);
