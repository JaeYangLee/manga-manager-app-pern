const pool = require("../database/database");

const getAllTrackedManga = async () => {
  const result = await pool.query("SELECT * FROM manga_list");
  return result.rows;
};

const getTrackedMangaByID = async (manga_list_id) => {
  const result = await pool.query(
    "SELECT * FROM manga_list WHERE manga_list_id = $1",
    [manga_list_id]
  );
  return result.rows[0];
};

const addTrackedManga = async (manga_id, status) => {
  const result = await pool.query(
    "INSERT INTO manga_list(manga_id, status) VALUES($1, $2) RETURNING *",
    [manga_id, status]
  );
  return result.rows[0];
};

const updateTrackedManga = async (manga_list_id, manga_id, status) => {
  const result = await pool.query(
    "UPDATE manga_list SET manga_id = $1, status = $2 WHERE manga_list_id = $3 RETURNING *",
    [manga_id, status, manga_list_id]
  );
  return result.rows[0];
};

const deleteTrackedManga = async (manga_list_id) => {
  const result = await pool.query(
    "DELETE FROM manga_list WHERE manga_list_id = $1 RETURNING *",
    [manga_list_id]
  );
  return result.rows[0];
};

module.exports = {
  getAllTrackedManga,
  getTrackedMangaByID,
  addTrackedManga,
  updateTrackedManga,
  deleteTrackedManga,
};
