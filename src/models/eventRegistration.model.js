import mongoose from "mongoose";

const eventRegistrationSchema = new mongoose.Schema({
  user_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required: true 
  },
  event_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Event",
    required: true 
  },
  status: { 
    type: String, 
    default: "Pending",
    enum: ["Pending", "Approved", "Rejected"] 
  },
  created_at: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model("EventRegistration", eventRegistrationSchema);
