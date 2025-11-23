import EventHeroSection from "../models/event/EventHeroSection.js";
import NextEventSection from "../models/event/NextEventSection.js";
import { getNextId, shiftIdsAfterDelete } from "../utils/increment.js";

// =======================
// EVENT HERO SECTION CRUD
// =======================

// CREATE
export const createEventHero = async (req, res) => {
  try {
    const id = await getNextId(EventHeroSection);
    const newHero = new EventHeroSection({ id, ...req.body });
    await newHero.save();
    res.status(201).json(newHero);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET ALL
export const getEventHero = async (req, res) => {
  try {
    const data = await EventHeroSection.find().sort({ id: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET BY ID
export const getEventHeroById = async (req, res) => {
  try {
    const item = await EventHeroSection.findOne({ id: req.params.id });
    if (!item) return res.status(404).json({ message: "Hero section not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateEventHero = async (req, res) => {
  try {
    const item = await EventHeroSection.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!item) return res.status(404).json({ message: "Hero section not found" });
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
export const deleteEventHero = async (req, res) => {
  try {
    const deleted = await EventHeroSection.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ message: "Hero section not found" });

    await shiftIdsAfterDelete(EventHeroSection, parseInt(req.params.id));
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// =======================
// NEXT EVENT SECTION CRUD
// =======================

// CREATE
export const createNextEvent = async (req, res) => {
  try {
    const id = await getNextId(NextEventSection);
    const newEvent = new NextEventSection({ id, ...req.body });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET ALL
export const getNextEvents = async (req, res) => {
  try {
    const data = await NextEventSection.find().sort({ id: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET BY ID
export const getNextEventById = async (req, res) => {
  try {
    const item = await NextEventSection.findOne({ id: req.params.id });
    if (!item) return res.status(404).json({ message: "Event not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateNextEvent = async (req, res) => {
  try {
    const item = await NextEventSection.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!item) return res.status(404).json({ message: "Event not found" });
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
export const deleteNextEvent = async (req, res) => {
  try {
    const deleted = await NextEventSection.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ message: "Event not found" });

    await shiftIdsAfterDelete(NextEventSection, parseInt(req.params.id));
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
