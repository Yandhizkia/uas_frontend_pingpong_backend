import express from "express";
import {
  getAnnouncements,
  getAnnouncementById,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from "../controllers/announcement.controller.js";

const router = express.Router();

router.get("/announcement", getAnnouncements);
router.get("/announcement/:id", getAnnouncementById);
router.post("/announcement", createAnnouncement);
router.put("/announcement/:id", updateAnnouncement);
router.delete("/announcement/:id", deleteAnnouncement);

export default router;
