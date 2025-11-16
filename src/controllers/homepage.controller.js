import HeroCarousel from "../models/HeroCarousel.model.js";
import ContentSection from "../models/ContentSection.model.js";
import ArticleSection from "../models/ArticleSection.model.js";
import { getNextId, shiftIdsAfterDelete } from "../utils/increment.js";

/* ====================
   HERO CAROUSEL
   ==================== */
export const getAllHero = async (req, res) => {
  try {
    const data = await HeroCarousel.find().sort({ id: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getHeroById = async (req, res) => {
  const data = await HeroCarousel.findOne({ id: req.params.id });
  if (!data) return res.status(404).json({ message: "Not found" });
  res.json(data);
};

export const createHero = async (req, res) => {
  try {
    const nextId = await getNextId(HeroCarousel);
    const newData = await HeroCarousel.create({ id: nextId, ...req.body });
    res.json(newData);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updateHero = async (req, res) => {
  const updated = await HeroCarousel.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true }
  );
  res.json(updated);
};

export const deleteHero = async (req, res) => {
  const deleted = await HeroCarousel.findOneAndDelete({ id: req.params.id });
  if (!deleted) return res.status(404).json({ message: "Not found" });

  await shiftIdsAfterDelete(HeroCarousel, deleted.id);
  res.json({ message: "Deleted & ids shifted" });
};


/* ====================
   CONTENT SECTIONS
   ==================== */
export const getAllSections = async (req, res) => {
  try {
    const data = await ContentSection.find().sort({ id: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getSectionById = async (req, res) => {
  const data = await ContentSection.findOne({ id: req.params.id });
  if (!data) return res.status(404).json({ message: "Not found" });
  res.json(data);
};

export const createSection = async (req, res) => {
  try {
    const nextId = await getNextId(ContentSection);
    const newData = await ContentSection.create({ id: nextId, ...req.body });
    res.json(newData);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updateSection = async (req, res) => {
  const updated = await ContentSection.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true }
  );
  res.json(updated);
};

export const deleteSection = async (req, res) => {
  const deleted = await ContentSection.findOneAndDelete({ id: req.params.id });
  if (!deleted) return res.status(404).json({ message: "Not found" });

  await shiftIdsAfterDelete(ContentSection, deleted.id);
  res.json({ message: "Deleted & ids shifted" });
};


/* ====================
   ARTICLE SECTION
   ==================== */
export const getAllArticles = async (req, res) => {
  try {
    const data = await ArticleSection.find().sort({ id: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getArticleById = async (req, res) => {
  const data = await ArticleSection.findOne({ id: req.params.id });
  if (!data) return res.status(404).json({ message: "Not found" });
  res.json(data);
};

export const createArticle = async (req, res) => {
  try {
    const nextId = await getNextId(ArticleSection);
    const newData = await ArticleSection.create({ id: nextId, ...req.body });
    res.json(newData);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updateArticle = async (req, res) => {
  const updated = await ArticleSection.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true }
  );
  res.json(updated);
};

export const deleteArticle = async (req, res) => {
  const deleted = await ArticleSection.findOneAndDelete({ id: req.params.id });
  if (!deleted) return res.status(404).json({ message: "Not found" });

  await shiftIdsAfterDelete(ArticleSection, deleted.id);
  res.json({ message: "Deleted & ids shifted" });
};
