const mangaController = require("../controller/mangaController");
const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadConfig");

router.get("/", mangaController.getAllManga);
router.post("/", upload.single("cover_image"), mangaController.addManga);
router.put(
  "/:manga_id",
  upload.single("cover_image"),
  mangaController.updateManga
);
router.delete("/:manga_id", mangaController.deleteManga);

module.exports = router;
