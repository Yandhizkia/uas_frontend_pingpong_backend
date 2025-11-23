import mongoose from "mongoose";

const HeroCarouselSchema = new mongoose.Schema({
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
  title: String,
  description: String
});

export default mongoose.model("HeroCarousel", HeroCarouselSchema);
