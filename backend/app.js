const mangaRoutes = require("./routes/mangaRoutes");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/mangas", mangaRoutes);
app.use("/uploads", express.static("uploads"));
app.use((err, req, res, next) => {
  console.error("[GLOBAL ERROR /app]:", err.message);
  res.status(500).json({ error: "[GLOBAL ERROR /app]: Server error..." });
});

module.exports = app;
