const mangaModel = require("../model/mangaModel");
const fs = require("fs");

//the purpose of this is to allow the middleware to validate first if a manga exist before the controller.

const checkDuplicateManga = async (req, res, next) => {
  try {
    const { title, author } = req.body;
    const existing = await mangaModel.findDuplicate(title, author);

    if (existing) {
      //deletes already uploaded image in detected duplicate
      if (req.file && req.file.path) {
        try {
          await fs.unlink(req.file.path);
          console.log("[DELETE FILE SUCCESS]: Ghost Upload Removed!");
        } catch (err) {
          console.error("[DELETE FILE FOLDER]:", err.message);
        }
      }

      return res.status(400).json({
        success: false,
        message: "[POST /middleware]: Manga already existing! Upload aborted!",
      });
    }
    next();
  } catch (err) {
    console.error(
      "[POST /middleware]: Error adding manga! Upload Aborted!",
      err.message
    );
    res.status(500).json({ error: "[POST /middleware]: Server Error!" });
  }
};

module.exports = checkDuplicateManga;
