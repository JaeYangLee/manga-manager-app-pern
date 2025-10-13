const mangaController = require("../controller/mangaController");
const mangaListController = require("../controller/mangaListController");
const express = require("express");
const router = express.Router();
const multer = require("multer"); //require this node to handle uploads
const path = require("path"); //require this node to handle uploads

// this is to set up multer storage and naming convention of your uploaded files.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const baseName = path.baseName(file.originalname, ext);
    const uniqueSuffix = crypto.randomUUID();
    cb(null, `${baseName}-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({ storage });

router.get("/", mangaController.getAllManga);
router.get("/:manga_id", mangaController.getMangaByID);
router.post("/", upload.single("cover_image"), mangaController.addManga);
router.put(
  "/:manga_id",
  upload.single("cover_image"),
  mangaController.updateManga
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
