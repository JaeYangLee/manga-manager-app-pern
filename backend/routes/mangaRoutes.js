const mangaController = require("../controller/mangaController");
const mangaListController = require("../controller/mangaListController");
const express = require("express");
const router = express.Router();
const multer = require("multer"); //require this node to handle uploads
const path = require("path"); //require this node to handle uploads
const crypto = require("crypto"); // for handling randomized unique id

// this is to set up multer storage and naming convention of your uploaded files.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    const uniqueSuffix = crypto.randomUUID();
    cb(null, `${baseName}-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({ storage });

router.get("/", mangaController.getAllManga);
router.get("/:manga_id", mangaController.getMangaByID);
router.post("/", mangaController.addManga);
//the route to upload a manga cover image
router.post(
  "/:manga_id/upload",
  upload.single("cover_image"),
  mangaController.uploadMangaCover
);
router.delete("/:manga_id", mangaController.deleteManga);

router.get("/:manga_id/list", mangaListController.getAllTrackedManga);
router.get(
  "/:manga_id/list/:manga_list_id",
  mangaListController.getTrackedMangaByID
);
router.post("/:manga_id/list/", mangaListController.addTrackedManga);
router.put(
  "/:manga_id/list/:manga_list_id",
  mangaListController.updateTrackedManga
);
router.delete(
  "/:manga_id/list/:manga_list_id",
  mangaListController.deleteTrackedManga
);

module.exports = router;
