import express from "express";
import {
  // ===== EVENT CONTROLLERS =====
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,

  // ===== SCHEDULE CONTROLLERS =====
  getSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule,

  // ===== QUICK EVENT CONTROLLERS =====
  getQuickEvents,
  getQuickEventById,
  createQuickEvent,
  updateQuickEvent,
  deleteQuickEvent,
} from "../controllers/event.controller.js";

const router = express.Router();

// ==================== EVENT ROUTES ====================
router.get("/events", getAllEvents);
router.get("/events/:id", getEventById);
router.post("/events", createEvent);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

// ==================== SCHEDULE ROUTES ====================
router.get("/schedules", getSchedules);
router.get("/schedules/:id", getScheduleById);
router.post("/schedules", createSchedule);
router.put("/schedules/:id", updateSchedule);
router.delete("/schedules/:id", deleteSchedule);

// ==================== QUICK EVENT ROUTES ====================
router.get("/quick-events", getQuickEvents);
router.get("/quick-events/:id", getQuickEventById);
router.post("/quick-events", createQuickEvent);
router.put("/quick-events/:id", updateQuickEvent);
router.delete("/quick-events/:id", deleteQuickEvent);

export default router;
