import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected route
router.get("/me", verifyToken, (req, res) => {
    res.json({
        message: "Akses berhasil",
        user: req.user
    });
});

export default router;