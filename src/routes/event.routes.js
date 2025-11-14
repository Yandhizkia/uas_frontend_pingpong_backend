import express from "express";
import {
  // ==== EVENT CONTROLLERS ====
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,

  // ==== SCHEDULE CONTROLLERS ====
  getSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule,

  // ==== QUICK EVENT CONTROLLERS ====
  getQuickEvents,
  getQuickEventById,
  createQuickEvent,
  updateQuickEvent,
  deleteQuickEvent,
} from "../controllers/event.controller.js";

const router = express.Router();

// ==================== EVENT ROUTES ====================

// Ambil semua event
router.get("/events", getAllEvents);

// Ambil event berdasarkan ID (numeric)
router.get("/events/:id", getEventById);

// Tambah event baru
router.post("/events", createEvent);

// Update event berdasarkan ID
router.put("/events/:id", updateEvent);

// Hapus event berdasarkan ID
router.delete("/events/:id", deleteEvent);

// ==================== SCHEDULE ROUTES ====================

// Ambil semua jadwal
router.get("/schedules", getSchedules);

// Ambil jadwal berdasarkan ID (numeric)
router.get("/schedules/:id", getScheduleById);

// Tambah jadwal baru
router.post("/schedules", createSchedule);

// Update jadwal berdasarkan ID
router.put("/schedules/:id", updateSchedule);

// Hapus jadwal berdasarkan ID
router.delete("/schedules/:id", deleteSchedule);

// ==================== QUICK EVENT ROUTES ====================

// Ambil semua quick event
router.get("/quick-events", getQuickEvents);

// Ambil quick event berdasarkan ID (numeric)
router.get("/quick-events/:id", getQuickEventById);

// Tambah quick event baru
router.post("/quick-events", createQuickEvent);

// Update quick event berdasarkan ID
router.put("/quick-events/:id", updateQuickEvent);

// Hapus quick event berdasarkan ID
router.delete("/quick-events/:id", deleteQuickEvent);

export default router;
