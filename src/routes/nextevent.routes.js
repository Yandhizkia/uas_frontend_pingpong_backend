import express from "express";
import {
  // ===== EVENT HERO SECTION =====
  createEventHero,
  getEventHero,
  getEventHeroById,
  updateEventHero,
  deleteEventHero,

  // ===== NEXT EVENT SECTION =====
  createNextEvent,
  getNextEvents,
  getNextEventById,
  updateNextEvent,
  deleteNextEvent,
} from "../controllers/nextevent.controller.js";

const router = express.Router();

// Event Hero Section endpoints
router.get("/hero", getEventHero);
router.post("/hero", createEventHero);
router.get("/hero/:id", getEventHeroById);
router.put("/hero/:id", updateEventHero);
router.delete("/hero/:id", deleteEventHero);

// Next Event Section endpoints
router.get("/nextevent", getNextEvents);
router.post("/nextevent", createNextEvent);
router.get("/nextevent/:id", getNextEventById);
router.put("/nextevent/:id", updateNextEvent);
router.delete("/nextevent/:id", deleteNextEvent);

export default router;
