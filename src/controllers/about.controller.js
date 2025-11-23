import LtmuHeroSection from "../models/about/LtmuHeroSection.js";
import FotoSection from "../models/about/FotoSection.js";
import PengurusSection from "../models/about/PengurusSection.js";
import { getNextId, shiftIdsAfterDelete } from "../utils/increment.js";

const handleError = (res, err) => {
  console.error(err);
  return res.status(400).json({ error: err.message || "Something went wrong" });
};

// ---------------- LTMU HERO SECTION ----------------

export const getHero = async (req, res) => {
  try {
    const data = await LtmuHeroSection.find();
    res.json(data);
  } catch (err) {
    handleError(res, err);
  }
};

export const getHeroById = async (req, res) => {
  try {
    const data = await LtmuHeroSection.findOne({ id: req.params.id });
    if (!data) return res.status(404).json({ message: "Hero not found" });
    res.json(data);
  } catch (err) {
    handleError(res, err);
  }
};

export const createHero = async (req, res) => {
  try {
    const id = await getNextId(LtmuHeroSection);
    const newItem = new LtmuHeroSection({ id, ...req.body });
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    handleError(res, err);
  }
};

export const updateHero = async (req, res) => {
  try {
    const updated = await LtmuHeroSection.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: "Hero not found" });
    res.json(updated);
  } catch (err) {
    handleError(res, err);
  }
};

export const deleteHero = async (req, res) => {
  try {
    const { id } = req.params;
    await LtmuHeroSection.deleteOne({ id });
    await shiftIdsAfterDelete(LtmuHeroSection, Number(id));
    res.json({ message: "Hero deleted successfully" });
  } catch (err) {
    handleError(res, err);
  }
};

// ---------------- FOTO SECTIONS ----------------

export const getFoto = async (req, res) => {
  try {
    const data = await FotoSection.find();
    res.json(data);
  } catch (err) {
    handleError(res, err);
  }
};

export const getFotoById = async (req, res) => {
  try {
    const data = await FotoSection.findOne({ id: req.params.id });
    if (!data) return res.status(404).json({ message: "Foto not found" });
    res.json(data);
  } catch (err) {
    handleError(res, err);
  }
};

export const createFoto = async (req, res) => {
  try {
    const id = await getNextId(FotoSection);
    const newItem = new FotoSection({ id, ...req.body });
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    handleError(res, err);
  }
};

export const updateFoto = async (req, res) => {
  try {
    const updated = await FotoSection.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: "Foto not found" });
    res.json(updated);
  } catch (err) {
    handleError(res, err);
  }
};

export const deleteFoto = async (req, res) => {
  try {
    const { id } = req.params;
    await FotoSection.deleteOne({ id });
    await shiftIdsAfterDelete(FotoSection, Number(id));
    res.json({ message: "Foto deleted successfully" });
  } catch (err) {
    handleError(res, err);
  }
};

// ---------------- PENGURUS SECTIONS ----------------

export const getPengurus = async (req, res) => {
  try {
    const data = await PengurusSection.find();
    res.json(data);
  } catch (err) {
    handleError(res, err);
  }
};

export const getPengurusById = async (req, res) => {
  try {
    const data = await PengurusSection.findOne({ id: req.params.id });
    if (!data) return res.status(404).json({ message: "Pengurus not found" });
    res.json(data);
  } catch (err) {
    handleError(res, err);
  }
};

export const createPengurus = async (req, res) => {
  try {
    const id = await getNextId(PengurusSection);
    const newItem = new PengurusSection({ id, ...req.body });
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    handleError(res, err);
  }
};

export const updatePengurus = async (req, res) => {
  try {
    const updated = await PengurusSection.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: "Pengurus not found" });
    res.json(updated);
  } catch (err) {
    handleError(res, err);
  }
};

export const deletePengurus = async (req, res) => {
  try {
    const { id } = req.params;
    await PengurusSection.deleteOne({ id });
    await shiftIdsAfterDelete(PengurusSection, Number(id));
    res.json({ message: "Pengurus deleted successfully" });
  } catch (err) {
    handleError(res, err);
  }
};
