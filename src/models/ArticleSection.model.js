import mongoose from "mongoose";

const ArticleSectionSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  shortDescription: String,
  image: String,
  fullDescription: String
});

export default mongoose.model("ArticleSection", ArticleSectionSchema);
