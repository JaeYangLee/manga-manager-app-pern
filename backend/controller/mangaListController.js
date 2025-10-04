const mangaListModel = require("../model/mangaListModel");

const getAllTrackedManga = async (req, res) => {
  try {
    const allTrackedManga = await mangaListModel.getAllTrackedManga();
    res.json(allTrackedManga);
  } catch (err) {
    console.error("GET: Error Fetching All Tracked Mangas!", err.message);
    res.status(400).json({ error: "GET: Server Error!" });
  }
};

const getTrackedMangaByID = async (req, res) => {
  try {
    const { manga_list_id } = req.params;
    const trackedManga = await mangaListModel.getTrackedMangaByID(
      manga_list_id
    );

    if (!trackedManga) {
      res.status(400).json({ error: "GET: Tracked Manga Not Found..." });
    }

    res.json(trackedManga);
  } catch (err) {
    console.error("GET: Error Fetching Tracked Manga!", err.message);
    res.status(400).json({ error: "GET: Server Error!" });
  }
};

const addTrackedManga = async (req, res) => {
  try {
    const { manga_id, status } = req.body;
    const newTrackedManga = await mangaListModel.addTrackedManga(
      manga_id,
      status
    );
    res.json(newTrackedManga);
  } catch (err) {
    console.error("POST: Error Adding Tracked Manga!", err.message);
    res.status(400).json({ error: "POST: Server Error!" });
  }
};

const updateTrackedManga = async (req, res) => {
  try {
    const { manga_list_id } = req.params;
    const { manga_id, status } = req.body;

    const updatedTrackedManga = await mangaListModel.updateTrackedManga(
      manga_list_id,
      manga_id,
      status
    );

    if (!updatedTrackedManga) {
      res.status(400).json({ error: "PUT: Tracked Manga Not found..." });
    }

    res.json(updatedTrackedManga);
  } catch (err) {
    console.error("PUT: Error Updating Tracked Manga", err.message);
    res.status(400).json({ error: "PUT: Server Error!" });
  }
};

const deleteTrackedManga = async (req, res) => {
  try {
    const { manga_list_id } = req.params;
    const deletedTrackedManga = await mangaListModel.deleteTrackedManga(
      manga_list_id
    );

    if (!deletedTrackedManga) {
      res.status(400).json({ error: "DELETE: Tracked Manga Not Found..." });
    } else {
      res
        .status(200)
        .json({ message: "DELETE: Tracked Manga Successfully Deleted!" });
    }
  } catch (err) {
    console.error("DELETE: Error Deleting Tracked Manga!", err.message);
    res.status(400).json({ error: "DELETE: Server Error!" });
  }
};

module.exports = {
  getAllTrackedManga,
  getTrackedMangaByID,
  addTrackedManga,
  updateTrackedManga,
  deleteTrackedManga,
};
