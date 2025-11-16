import mongoose from "mongoose";

const ContentSectionSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  image: String,
  title: String,
  description: String,
  page: String
});

export default mongoose.model("ContentSection", ContentSectionSchema);
