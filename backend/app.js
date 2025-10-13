const router = require("../backend/routes/mangaRoutes");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // for uploading files
app.use("/mangas", router); //main route

module.exports = app;
