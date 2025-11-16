import express from "express";
import { verifyToken, verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

// Contoh route hanya untuk admin
router.get("/dashboard", verifyToken, verifyAdmin, (req, res) => {
    res.json({
        message: "Selamat datang Admin",
        user: req.user
    });
});

export default router;