const pool = require("../database/database");

const getAllManga = async () => {
  const result = await pool.query("SELECT * FROM manga");
  return result.rows;
};

const getMangaByID = async (manga_id) => {
  const result = await pool.query("SELECT * FROM manga WHERE manga_id = $1", [
    manga_id,
  ]);
  return result.rows[0];
};

const addManga = async (title, author, genre, published_year) => {
  const result = await pool.query(
    "INSERT INTO manga(title, author, genre, published_year) VALUES ( $1, $2, $3, $4 ) RETURNING *",
    [title, author, genre, published_year]
  );
  return result.rows[0];
};

const updateManga = async (manga_id, title, author, genre, published_year) => {
  const result = await pool.query(
    "UPDATE manga SET title = $1, author = $2, genre = $3, published_year = $4 WHERE manga_id = $6 RETURNING *",
    [title, author, genre, published_year, cover_image, manga_id]
  );
  return result.rows[0];
};

const deleteManga = async (manga_id) => {
  const result = await pool.query(
    "DELETE from manga WHERE manga_id = $1 RETURNING *",
    [manga_id]
  );
  return result.rows[0];
};

async function findAlreadyExisting(title, author, genre, published_year) {
  const result = await pool.query(
    "SELECT * FROM manga WHERE title = $1 OR author = $2 OR genre = $3 OR published_year = $4 LIMIT 1",
    [title, author, genre, published_year]
  );
  return result.rows[0];
}

const searchManga = async (search) => {
  const result = await pool.query(
    "SELECT * FROM manga WHERE title ILIKE $1 OR author ILIKE $1 OR genre ILIKE $1 OR CAST(published_year AS TEXT) ILIKE $1 ORDER BY manga_id ASC",
    [`%${search}%`]
  );
  return result.rows;
};

//function for uploading cover image for a manga
const updateMangaCover = async (manga_id, cover_image) => {
  const result = await pool.query(
    "UPDATE manga SET cover_image = $1 WHERE manga_id = $2 RETURNING *",
    [cover_image, manga_id]
  );
  return result.rows[0];
};

module.exports = {
  getAllManga,
  searchManga,
  getMangaByID,
  addManga,
  findAlreadyExisting,
  updateManga,
  updateMangaCover,
  deleteManga,
};
