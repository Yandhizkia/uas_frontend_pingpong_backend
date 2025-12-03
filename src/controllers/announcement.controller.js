import Announcement from "../models/Announcement.js";
import { getNextId, shiftIdsAfterDelete } from "../utils/increment.js";

// GET ALL
export const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ id: 1 });
    res.status(200).json(announcements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET BY ID
export const getAnnouncementById = async (req, res) => {
  try {
    const announcement = await Announcement.findOne({ id: req.params.id });
    if (!announcement) return res.status(404).json({ message: "Announcement not found" });

    res.status(200).json(announcement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE
export const createAnnouncement = async (req, res) => {
  try {
    const nextId = await getNextId(Announcement);
    const now = new Date();

    const newAnnouncement = new Announcement({
      id: nextId,
      title: req.body.title,
      message: req.body.message,
      type: req.body.type,
      important: req.body.important ?? false,
      read: req.body.read ?? false,
      date: now.toLocaleDateString("en-GB"),
      time: now.toLocaleTimeString("en-GB", { hour12: false })
    });

    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updateAnnouncement = async (req, res) => {
  try {
    const now = new Date();

    const updatedData = {
      title: req.body.title,
      message: req.body.message,
      type: req.body.type,
      important: req.body.important,
      read: req.body.read, // boleh update read
      date: now.toLocaleDateString("en-GB"),
      time: now.toLocaleTimeString("en-GB", { hour12: false })
    };

    const updated = await Announcement.findOneAndUpdate(
      { id: req.params.id },
      updatedData,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Announcement not found" });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
export const deleteAnnouncement = async (req, res) => {
  try {
    const deleted = await Announcement.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ message: "Announcement not found" });

    await shiftIdsAfterDelete(Announcement, req.params.id);
    res.status(200).json({ message: "Announcement deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
