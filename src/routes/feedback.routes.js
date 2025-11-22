import express from "express";
import { createFeedback, getFeedbackByUser, adminGetAllFeedback, adminReplyFeedback } from "../controllers/feedback.controller.js";
import { verifyToken, verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", createFeedback);
router.get("/", getFeedbackByUser);
router.get("/admin", verifyToken, verifyAdmin, adminGetAllFeedback);
router.put("/admin/reply/:id", verifyToken, verifyAdmin, adminReplyFeedback);

export default router;
