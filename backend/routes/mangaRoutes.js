const mangaController = require("../controller/mangaController");
const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadConfig");
const checkDuplicateManga = require("../middleware/checkDuplicateManga");

router.get("/", mangaController.getAllManga);
router.get("/:manga_id", mangaController.getMangaById);
router.post(
  "/",
  checkDuplicateManga,
  upload.single("cover_image"),
  mangaController.addManga
);
router.put(
  "/:manga_id",
  upload.single("cover_image"),
  mangaController.updateManga
);
router.delete("/:manga_id", mangaController.deleteManga);

module.exports = router;
