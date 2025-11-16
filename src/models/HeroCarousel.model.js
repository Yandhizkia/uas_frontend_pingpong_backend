import mongoose from "mongoose";

const HeroCarouselSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  image: String,
  title: String,
  description: String
});

export default mongoose.model("HeroCarousel", HeroCarouselSchema);
