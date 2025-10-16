const mangaModel = require("../model/mangaModel");

const getAllManga = async (req, res) => {
  try {
    const allManga = await mangaModel.getAllManga();
    res.status(200).json({
      message: "[GET /controller]: Fetching all mangas successful!",
      data: allManga,
    });
  } catch (err) {
    console.error("[GET /controller]: Error fetching all manga!", err.message);
    res.status(500).json({ error: "[GET /controller]: Server error!" });
  }
};

const addManga = async (req, res) => {
  try {
    const { title, author, genre, published_year } = req.body;
    const cover_image = req.file ? req.file.filename : null;

    const newManga = await mangaModel.addManga(
      title,
      author,
      genre,
      published_year,
      cover_image
    );
    res.status(201).json({
      message: "[POST /controller]: Adding manga successful!",
      data: newManga,
    });
  } catch (err) {
    console.error("[POST /controller]: Error adding manga!", err.message);
    res.status(500).json({ error: "[POST /controller]: Server error!" });
  }
};

const updateManga = async (req, res) => {
  try {
    const { manga_id } = req.params;
    const { title, author, genre, published_year } = req.body;
    const cover_image = req.file ? req.file.filename : null;

    const updatedManga = await mangaModel.updateManga(
      manga_id,
      title,
      author,
      genre,
      published_year,
      cover_image
    );
    res.status(200).json({
      message: "[PUT /controller]: Update successful!",
      data: updatedManga,
    });
  } catch (err) {
    console.error("[PUT /controller]: Error updating manga!", err.message);
    res.status(500).json({ error: "[PUT /controller]: Server Error!" });
  }
};

const deleteManga = async (req, res) => {
  try {
    const { manga_id } = req.params;
    const deletedManga = await mangaModel.deleteManga(manga_id);

    if (!deletedManga) {
      res
        .status(404)
        .json({ message: "[DELETE /controller]: Manga not found..." });
    } else {
      if (deletedManga.cover_image) {
        try {
          fs.unlinkSync(`uploads/${deletedManga.cover_image}`);
        } catch (err) {
          console.warn(
            `[DELETE /controller]: Failed to delete cover image ${deletedManga.cover_image}: ${err.message}`
          );
        }
      }

      res.status(200).json({
        message: "[DELETE /controller]: Delete successful!",
      });
    }
  } catch (err) {
    console.error("[DELETE /controller]: Error deleting manga", err.message);
    res.status(500).json({ error: "[DELETE /controller]: Server error" });
  }
};

module.exports = {
  getAllManga,
  addManga,
  updateManga,
  deleteManga,
};
