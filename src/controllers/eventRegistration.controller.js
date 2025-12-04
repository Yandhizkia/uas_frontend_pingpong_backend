import EventRegistration from "../models/eventRegistration.model.js";
import User from "../models/loginregister/user.model.js";
import QuickEvent from "../models/eventmanagement/quickEvent.model.js";

// USER REGISTER QUICK EVENT
export const registerEvent = async (req, res) => {
  try {
    const { user_id, event_id } = req.body;

    const user = await User.findById(user_id);
    const event = await QuickEvent.findById(event_id);

    if (!user || !event) {
      return res.status(404).json({ message: "User atau Event tidak ditemukan" });
    }

    const newReg = await EventRegistration.create({
      userInfo: {
        user_id: user._id,
        username: user.username,
        role: user.role
      },
      eventInfo: {
        event_id: event._id,
        title: event.title,
        date: event.date,
        time: event.time,
        location: event.location,
        type: event.type,
        recurringWeekly: event.recurringWeekly
      }
    });

    res.status(201).json(newReg);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

// ADMIN GET ALL REGISTRATIONS
export const getRegistrationsAdmin = async (req, res) => {
  try {
    const data = await EventRegistration.find().sort({ created_at: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch registrations" });
  }
};

// ADMIN UPDATE STATUS
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await EventRegistration.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Registration tidak ditemukan" });
    }

    res.json({ message: "Status updated!", updated });
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};

// USER GET OWN REGISTRATIONS
export const getUserRegistrations = async (req, res) => {
  try {
    const data = await EventRegistration.find({
      "userInfo.user_id": req.params.user_id
    }).sort({ created_at: -1 });

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user data" });
  }
};
