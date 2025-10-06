const router = require("../backend/routes/mangaRoutes");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/mangas", router);

module.exports = app;
