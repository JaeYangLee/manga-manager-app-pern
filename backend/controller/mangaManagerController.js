const mangaManagerModel = require("../model/mangaManagerModel");

const getAllManga = async (req, res) => {
  try {
    const allManga = await mangaManagerModel.getAllManga();
    res.json(allManga);
  } catch (err) {
    console.error("Error Fetching All Manga!", err.message);
    res.status(500).json({ message: "Server Error GET!" });
  }
};

const addManga = async (req, res) => {
  try {
    const { manga_id } = req.params;
    const { title, author, genre, published_year } = req.body;
    const newManga = await mangaManagerModel.addManga(
      manga_id,
      title,
      author,
      genre,
      published_year
    );
    res.json(newManga);
  } catch (err) {
    console.error("Error Adding Manga!", err.message);
    res.status(400).json({ message: "Server Error POST!" });
  }
};

const updateManga = async (req, res) => {
  try {
    const { manga_id } = req.params;
    const { title, author, genre, published_year } = req.body;
    const updatedManga = await mangaManagerModel.updateManga(
      manga_id,
      title,
      author,
      genre,
      published_year
    );

    if (!updatedManga) {
      res.status(400).json({ message: "Manga Not Found (PUT)..." });
    }

    res.json(updatedManga);
  } catch (err) {
    console.error("Server Updating Manga!", err.message);
    res.status(400).json({ message: "Server Error PUT!" });
  }
};

const deleteManga = async (req, res) => {
  try {
    const { manga_id } = req.params;
    const deletedManga = await mangaManagerModel.deleteManga(manga_id);
    if (!deletedManga) {
      res.status(400).json({ message: "Manga Not Found (DELETE)..." });
    } else {
      res
        .status(200)
        .json({ message: "Manga Successfully Deleted (DELETE)! " });
    }
  } catch (err) {
    console.error("Error Deleting Manga!", err.message);
    res.status(400).json({ message: "Server Error DELETE!" });
  }
};

module.exports = {
  getAllManga,
  addManga,
  updateManga,
  deleteManga,
};
