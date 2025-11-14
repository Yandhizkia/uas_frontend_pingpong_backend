import mongoose from "mongoose";

const quickEventSchema = new mongoose.Schema({
  id: { type: Number, unique: true },

  title: { type: String, required: true },
  date: String,
  time: String,
  location: String,
  type: String,
});

// Auto-increment numeric ID
quickEventSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      const last = await this.constructor.findOne().sort({ id: -1 }).select("id");
      this.id = last && last.id ? last.id + 1 : 1;
    } catch (err) {
      return next(err);
    }
  }
  next();
});

export default mongoose.model("QuickEvent", quickEventSchema);
