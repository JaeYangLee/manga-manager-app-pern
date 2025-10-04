const mangaController = require("../controller/mangaController");
const mangaListController = require("../controller/mangaListController");
const express = require("express");
const router = express.Router();

router.get("/", mangaController.getAllManga);
router.get("/:manga_id", mangaController.getMangaByID);
router.post("/", mangaController.addManga);
router.put("/:manga_id", mangaController.updateManga);
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
