import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  id: { type: Number, unique: true }, // ID urut manual
  title: { type: String, required: true },
  day: { type: String, required: true },
  time: String,
  location: String,
  type: String,
  recurringWeekly: { type: Boolean, default: false }, // baru ditambah
});

// Auto-assign numeric id berdasarkan max(id) di collection
scheduleSchema.pre("save", async function (next) {
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

export default mongoose.model("Schedule", scheduleSchema);
