import express from "express";
import {
  // ===== LTMU HERO SECTION =====
  getHero,
  getHeroById,
  createHero,
  updateHero,
  deleteHero,

  // ===== FOTO SECTIONS =====
  getFoto,
  getFotoById,
  createFoto,
  updateFoto,
  deleteFoto,

  // ===== PENGURUS SECTIONS =====
  getPengurus,
  getPengurusById,
  createPengurus,
  updatePengurus,
  deletePengurus,
} from "../controllers/about.controller.js";

const router = express.Router();

// ------- LTMU HERO SECTION ----------
router.get("/hero", getHero);
router.get("/hero/:id", getHeroById);
router.post("/hero", createHero);
router.put("/hero/:id", updateHero);
router.delete("/hero/:id", deleteHero);

// ------- FOTO SECTIONS ----------
router.get("/foto", getFoto);
router.get("/foto/:id", getFotoById);
router.post("/foto", createFoto);
router.put("/foto/:id", updateFoto);
router.delete("/foto/:id", deleteFoto);

// ------- PENGURUS SECTIONS ----------
router.get("/pengurus", getPengurus);
router.get("/pengurus/:id", getPengurusById);
router.post("/pengurus", createPengurus);
router.put("/pengurus/:id", updatePengurus);
router.delete("/pengurus/:id", deletePengurus);

export default router;
