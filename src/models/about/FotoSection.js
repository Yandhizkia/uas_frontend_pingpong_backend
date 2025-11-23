import mongoose from "mongoose";

const FotoSectionSchema = new mongoose.Schema({
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
  name: String,
  description: String,
});

export default mongoose.model("FotoSection", FotoSectionSchema);
