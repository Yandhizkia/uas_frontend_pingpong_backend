import Event from "../models/event.model.js";
import Schedule from "../models/schedule.model.js";
import QuickEvent from "../models/quickEvent.model.js";


// ==================== EVENT CONTROLLERS ====================

// GET semua event
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET event berdasarkan ID
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findOne({ id: req.params.id });
    if (!event) return res.status(404).json({ message: "Event tidak ditemukan" });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE event baru
export const createEvent = async (req, res) => {
  try {
    const { title, date, time, location, type, description, max_participants } = req.body;

    const newEvent = new Event({
      title,
      date,
      time,
      location,
      type,
      description,
      max_participants,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE event
export const updateEvent = async (req, res) => {
  try {
    const { title, date, time, location, type, description, max_participants } = req.body;

    const updated = await Event.findOneAndUpdate(
      { id: req.params.id },
      { title, date, time, location, type, description, max_participants },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Event tidak ditemukan" });

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE event
export const deleteEvent = async (req, res) => {
  try {
    const deleted = await Event.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ message: "Event tidak ditemukan" });

    res.json({ message: "Event berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==================== SCHEDULE CONTROLLERS (TIDAK DIUBAH) ====================

export const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getScheduleById = async (req, res) => {
  try {
    const schedule = await Schedule.findOne({ id: req.params.id });
    if (!schedule) return res.status(404).json({ message: "Schedule tidak ditemukan" });
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSchedule = async (req, res) => {
  try {
    const schedule = new Schedule(req.body);
    await schedule.save();
    res.status(201).json(schedule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSchedule = async (req, res) => {
  try {
    const updated = await Schedule.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Schedule tidak ditemukan" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSchedule = async (req, res) => {
  try {
    const deleted = await Schedule.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ message: "Schedule tidak ditemukan" });
    res.json({ message: "Schedule berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==================== QUICK EVENT CONTROLLERS ====================

// GET semua quick event
export const getQuickEvents = async (req, res) => {
  try {
    const quickEvents = await QuickEvent.find();
    res.json(quickEvents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET quick event by ID
export const getQuickEventById = async (req, res) => {
  try {
    const quickEvent = await QuickEvent.findOne({ id: req.params.id });
    if (!quickEvent) return res.status(404).json({ message: "Quick event tidak ditemukan" });
    res.json(quickEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE quick event
export const createQuickEvent = async (req, res) => {
  try {
    const { title, date, time, location, type } = req.body;

    const newQuickEvent = new QuickEvent({
      title,
      date,
      time,
      location,
      type,
    });

    await newQuickEvent.save();
    res.status(201).json(newQuickEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE quick event
export const updateQuickEvent = async (req, res) => {
  try {
    const { title, date, time, location, type } = req.body;

    const updated = await QuickEvent.findOneAndUpdate(
      { id: req.params.id },
      { title, date, time, location, type },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Quick event tidak ditemukan" });

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE quick event
export const deleteQuickEvent = async (req, res) => {
  try {
    const deleted = await QuickEvent.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ message: "Quick event tidak ditemukan" });

    res.json({ message: "Quick event berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
