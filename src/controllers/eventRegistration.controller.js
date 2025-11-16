import EventRegistration from "../models/eventRegistration.model.js";

// USER REGISTER EVENT
export const registerEvent = async (req, res) => {
  try {
    const { user_id, event_id } = req.body;

    await EventRegistration.create({ 
        user_id, 
        event_id,
    });

    res.json({ message: "Registration sent to admin!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

// ADMIN GET ALL REGISTRATIONS
export const getRegistrationsAdmin = async (req, res) => {
  try {
    const data = await EventRegistration.find()
      .populate("user_id", "full_name nim faculty major")
      .populate("event_id", "title date location")
      .sort({ created_at: -1 });

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch registrations" });
  }
};

// ADMIN UPDATE STATUS
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    await EventRegistration.findByIdAndUpdate(req.params.id, { status });

    res.json({ message: "Status updated!" });
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};

// USER GET OWN REGISTRATIONS
export const getUserRegistrations = async (req, res) => {
  try {
    const { user_id } = req.params;

    const data = await EventRegistration.find({ user_id })
      .populate("event_id", "title date location")
      .sort({ created_at: -1 });

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data" });
  }
};
