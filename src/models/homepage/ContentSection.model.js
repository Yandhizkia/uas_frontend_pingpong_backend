import mongoose from "mongoose";

const ContentSectionSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
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
  title: { type: String, required: true },
  description: { type: String, required: true },
  page: {
    type: String,
    enum: ["/about", "/event", "/contact"],
    required: true
  }
});

export default mongoose.model("ContentSection", ContentSectionSchema);
