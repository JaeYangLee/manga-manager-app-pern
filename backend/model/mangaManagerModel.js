const pool = require("../database/database");

const getAllManga = async () => {
  const result = await pool.query("SELECT * FROM manga");
  return result.rows;
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
    "UPDATE manga SET title = $1, author = $2, genre = $3, published_year = $4 WHERE manga_id = $5 RETURNING *",
    [title, author, genre, published_year, manga_id]
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

module.exports = {
  getAllManga,
  addManga,
  updateManga,
  deleteManga,
};
