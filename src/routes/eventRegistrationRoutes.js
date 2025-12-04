// routes/eventRegistrationRoutes.js
import express from "express";
import {
  registerEvent,
  getRegistrationsAdmin,
  getUserRegistrations,
  updateStatus
} from "../controllers/eventRegistration.controller.js";

const router = express.Router();

router.post("/", registerEvent);
router.put("/:id/status", updateStatus);
router.get("/", getRegistrationsAdmin);
router.get("/user/:user_id", getUserRegistrations);

export default router;
