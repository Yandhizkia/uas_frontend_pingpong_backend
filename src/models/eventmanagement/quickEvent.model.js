import mongoose from "mongoose";

const quickEventSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String },
  location: { type: String },
  type: { type: String },
  recurringWeekly: { type: Boolean, default: false },
});

// Auto increment ID
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
