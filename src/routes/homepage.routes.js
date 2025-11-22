import express from "express";
import {
  // ==== HERO CAROUSEL CONTROLLERS ====
  getAllHero, 
  getHeroById, 
  createHero, 
  updateHero, 
  deleteHero,

  // ==== CONTENT SECTIONS CONTROLLERS ====
  getAllSections, 
  getSectionById, 
  createSection, 
  updateSection, 
  deleteSection,

  // ==== ARTICLE SECTION CONTROLLERS ====
  getAllArticles, 
  getArticleById, 
  createArticle, 
  updateArticle, 
  deleteArticle,
} from "../controllers/homepage.controller.js";

const router = express.Router();

router.get("/hero", getAllHero);
router.get("/hero/:id", getHeroById);
router.post("/hero", createHero);
router.put("/hero/:id", updateHero);
router.delete("/hero/:id", deleteHero);

router.get("/section", getAllSections);
router.get("/section/:id", getSectionById);
router.post("/section", createSection);
router.put("/section/:id", updateSection);
router.delete("/section/:id", deleteSection);

router.get("/article", getAllArticles);
router.get("/article/:id", getArticleById);
router.post("/article", createArticle);
router.put("/article/:id", updateArticle);
router.delete("/article/:id", deleteArticle);

export default router;
