const mangaManagerController = require("../controller/mangaManagerController");
const express = require("express");
const router = express.Router();

router.get("/", mangaManagerController.getAllManga);
router.post("/", mangaManagerController.addManga);
router.put("/:manga_id", mangaManagerController.updateManga);
router.delete("/:manga_id", mangaManagerController.deleteManga);

module.exports = router;
