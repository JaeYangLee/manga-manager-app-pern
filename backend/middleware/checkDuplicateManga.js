const mangaModel = require("../model/mangaModel");

//the purpose of this is to allow the middleware to validate first if a manga exist before the controller.

const checkDuplicateManga = async (req, res, next) => {
  const { title, author } = req.body;

  try {
    const existing = await mangaModel.findDuplicate({ title, author });

    if (existing) {
      return res.status(400).json({
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
