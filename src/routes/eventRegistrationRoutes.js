import express from "express";
import EventRegistration from "../models/eventRegistration.model.js";

const router = express.Router();

// ===========================
// CREATE NEW REGISTRATION
// ===========================
router.post("/", async (req, res) => {
  try {
    const newReg = await EventRegistration.create({
      user_id: req.body.user_id,
      event_id: req.body.event_id
    });

    res.status(201).json(newReg);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating registration" });
  }
});

// ===========================
// UPDATE STATUS (ADMIN)
// ===========================
router.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await EventRegistration.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Registration not found" });
    }

    res.json({ message: "Status updated!", updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating status" });
  }
});

// ===========================
// ADMIN GET ALL REGISTRATIONS
// ===========================
router.get("/", async (req, res) => {
  try {
    const registrations = await EventRegistration.find()
      .populate("user_id", "full_name nim faculty major")
      .populate("event_id", "title date time location")
      .sort({ created_at: -1 });

    res.json(registrations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch registrations" });
  }
});

// ===========================
// USER GET HIS OWN REGISTRATIONS
// ===========================
router.get("/user/:user_id", async (req, res) => {
  try {
    const data = await EventRegistration.find({ user_id: req.params.user_id })
      .populate("event_id", "title date time location")
      .sort({ created_at: -1 });

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch user registrations" });
  }
});

export default router;
