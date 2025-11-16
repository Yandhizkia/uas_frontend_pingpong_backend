import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import eventRoutes from "./routes/event.routes.js";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import homepageRoutes from "./routes/homepage.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// -------------------------------
//  KONEKSI MONGODB ATLAS
// -------------------------------
const uri = `${process.env.DB_CONNECTION}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// -------------------------------
//  ROUTES
// -------------------------------
app.use("/api", eventRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/homepage", homepageRoutes);


// -------------------------------
//  START SERVER
// -------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
