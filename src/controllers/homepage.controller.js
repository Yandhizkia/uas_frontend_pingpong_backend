import HeroCarousel from "../models/homepage/HeroCarousel.model.js";
import ContentSection from "../models/homepage/ContentSection.model.js";
import ArticleSection from "../models/homepage/ArticleSection.model.js";
import { getNextId, shiftIdsAfterDelete } from "../utils/increment.js";

// ========== HERO CAROUSEL ==========

export const getAllHero = async (req, res) => {
  try {
    const data = await HeroCarousel.find().sort({ id: 1 });
    return res.json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

export const getHeroById = async (req, res) => {
  try {
    const data = await HeroCarousel.findOne({ id: req.params.id });
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    return res.json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

export const createHero = async (req, res) => {
  try {
    const nextId = await getNextId(HeroCarousel);
    const created = await HeroCarousel.create({ id: nextId, ...req.body });
    return res.json({ success: true, data: created });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

export const updateHero = async (req, res) => {
  try {
    const updated = await HeroCarousel.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    return res.json({ success: true, data: updated });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

export const deleteHero = async (req, res) => {
  try {
    const deleted = await HeroCarousel.findOneAndDelete({ id: req.params.id });
    if (!deleted)
      return res.status(404).json({ success: false, message: "Not found" });

    await shiftIdsAfterDelete(HeroCarousel, deleted.id);

    return res.json({ success: true, message: "Deleted and IDs shifted" });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};


// ========== CONTENT SECTIONS ==========

export const getAllSections = async (req, res) => {
  try {
    const data = await ContentSection.find().sort({ id: 1 });
    return res.json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

export const getSectionById = async (req, res) => {
  try {
    const data = await ContentSection.findOne({ id: req.params.id });
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    return res.json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

export const createSection = async (req, res) => {
  try {
    const nextId = await getNextId(ContentSection);
    const created = await ContentSection.create({ id: nextId, ...req.body });
    return res.json({ success: true, data: created });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

export const updateSection = async (req, res) => {
  try {
    const updated = await ContentSection.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    return res.json({ success: true, data: updated });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

export const deleteSection = async (req, res) => {
  try {
    const deleted = await ContentSection.findOneAndDelete({ id: req.params.id });
    if (!deleted)
      return res.status(404).json({ success: false, message: "Not found" });

    await shiftIdsAfterDelete(ContentSection, deleted.id);

    return res.json({ success: true, message: "Deleted and IDs shifted" });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};


// ========== ARTICLE SECTION ==========

export const getAllArticles = async (req, res) => {
  try {
    const data = await ArticleSection.find().sort({ id: 1 });
    return res.json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

export const getArticleById = async (req, res) => {
  try {
    const data = await ArticleSection.findOne({ id: req.params.id });
    if (!data) return res.status(404).json({ success: false, message: "Not found" });
    return res.json({ success: true, data });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

export const createArticle = async (req, res) => {
  try {
    const nextId = await getNextId(ArticleSection);
    const created = await ArticleSection.create({ id: nextId, ...req.body });
    return res.json({ success: true, data: created });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const updated = await ArticleSection.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    return res.json({ success: true, data: updated });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const deleted = await ArticleSection.findOneAndDelete({ id: req.params.id });
    if (!deleted)
      return res.status(404).json({ success: false, message: "Not found" });

    await shiftIdsAfterDelete(ArticleSection, deleted.id);

    return res.json({ success: true, message: "Deleted and IDs shifted" });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};
