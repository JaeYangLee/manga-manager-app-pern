const mangaModel = require("../model/mangaModel");

const getAllManga = async (req, res) => {
  try {
    const { search } = req.query;
    let allManga;

    if (search) {
      allManga = await mangaModel.searchManga(search);
    } else {
      allManga = await mangaModel.getAllManga();
    }
    res.json(allManga);
  } catch (err) {
    console.error("Error Fetching All Manga!", err.message);
    res.status(500).json({ error: "GET: Server Error!" });
  }
};

const getMangaByID = async (req, res) => {
  try {
    const { manga_id } = req.params;
    const oneManga = await mangaModel.getMangaByID(manga_id);

    if (!oneManga) {
      res.status(400).json({ error: "GET: Manga Not Found..." });
    }

    res.json(oneManga);
  } catch (err) {
    console.error("Error Fetching A Manga!", err.message);
    res.status(400).json({ error: "GET: Server Error!" });
  }
};

const addManga = async (req, res) => {
  const { title, author, genre, published_year } = req.body;

  const existing = await mangaModel.findAlreadyExisting(title, author);
  if (existing) {
    return res.status(400).json({ message: "POST: Manga already existing!" });
  }

  try {
    const newManga = await mangaModel.addManga(
      title,
      author,
      genre,
      published_year
    );
    res.json(newManga);
  } catch (err) {
    if (err.code === "23505") {
      return res.status(400).json({ message: "POST: Manga already existing!" });
    }
    console.error("Error Adding Manga!", err.message);
    res.status(400).json({ error: "POST: Server Error!" });
  }
};

const updateManga = async (req, res) => {
  try {
    const { manga_id } = req.params;
    const { title, author, genre, published_year } = req.body;
    const updatedManga = await mangaModel.updateManga(
      manga_id,
      title,
      author,
      genre,
      published_year
    );

    if (!updatedManga) {
      res.status(400).json({ error: "PUT: Manga Not Found..." });
    }

    res.json(updatedManga);
  } catch (err) {
    console.error("Server Updating Manga!", err.message);
    res.status(400).json({ error: "PUT: Server Error!" });
  }
};

const deleteManga = async (req, res) => {
  try {
    const { manga_id } = req.params;
    const deletedManga = await mangaModel.deleteManga(manga_id);
    if (!deletedManga) {
      res.status(400).json({ error: "DELETE: Manga Not Found..." });
    } else {
      res.status(200).json({ message: "DELETE: Manga Successfully Deleted! " });
    }
  } catch (err) {
    console.error("Error Deleting Manga!", err.message);
    res.status(400).json({ error: "DELETE: Server Error!" });
  }
};

// function for uploading cover images that I've practiced.
const uploadMangaCover = async (req, res) => {
  try {
    const { manga_id } = req.params;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "POST: No File Uploaded!" });
    }

    const coverPath = file.filename;
    const uploadedMangaCover = await mangaModel.updateMangaCover(
      manga_id,
      coverPath
    );
    res.json({
      message: "POST: Upload Success!",
      data: uploadedMangaCover,
    });
  } catch (err) {
    console.error("POST: Error Uploading Manga Cover!", err.message);
    res.status(400).json({ error: "POST: Server Error!" });
  }
};

module.exports = {
  getAllManga,
  getMangaByID,
  addManga,
  updateManga,
  deleteManga,
  uploadMangaCover,
};
