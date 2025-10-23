const pool = require("../database/database");

const searchManga = async (search) => {
  const result = await pool.query(
    "SELECT * FROM manga WHERE (title ILIKE $1 OR author ILIKE $1 OR genre ILIKE $1 OR CAST(published_year AS TEXT) ILIKE $1) ORDER BY manga_id ASC",
    [`%${search}%`]
  );
  return result.rows;
};

const getAllManga = async () => {
  const result = await pool.query("SELECT * FROM manga");
  return result.rows;
};

const getMangaById = async (manga_id) => {
  const result = await pool.query("SELECT * FROM manga WHERE manga_id = $1", [
    manga_id,
  ]);
  return result.rows[0];
};

const addManga = async (
  title,
  author,
  genre,
  published_year,
  cover_image = null
) => {
  const result = await pool.query(
    "INSERT INTO manga (title, author, genre, published_year, cover_image) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [title, author, genre, published_year, cover_image]
  );
  return result.rows[0];
};

const updateManga = async (
  manga_id,
  title,
  author,
  genre,
  published_year,
  cover_image
) => {
  let query, values;

  // this condition works both when either if the cover image is updated or not.
  if (cover_image) {
    query = `UPDATE manga SET title = $1, author = $2, genre = $3, published_year = $4, cover_image = $5 WHERE manga_id = $6 RETURNING *`;
    values = [title, author, genre, published_year, cover_image, manga_id];
  } else {
    query = `UPDATE manga SET title = $1, author = $2, genre = $3, published_year = $4 WHERE manga_id = $5 RETURNING *`;
    values = [title, author, genre, published_year, manga_id];
  }

  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteManga = async (manga_id) => {
  const result = await pool.query(
    "DELETE FROM manga WHERE manga_id = $1 RETURNING *",
    [manga_id]
  );
  return result.rows[0] || null;
};

async function findDuplicate(title, author) {
  const result = await pool.query(
    "SELECT * FROM manga WHERE title ILIKE $1 AND author ILIKE $2 ORDER BY manga_id ASC",
    [title, author]
  );
  return result.rows[0];
}

//pagination with search feature
const getPaginatedManga = async (page = 1, limit = 8, search = "") => {
  const offset = (page - 1) * limit;
  const searchQuery = `%${search}%`;

  //Get total count
  let countQuery = "SELECT COUNT(*) AS total FROM manga";
  let dataQuery = "SELECT * FROM manga";
  const queryParams = [];

  //if search is not empty, add WHERE conditions
  const hasSearch = search.trim() !== "";
  if (hasSearch) {
    const whereClause =
      " WHERE (title ILIKE $1 OR author ILIKE $1 OR genre ILIKE $1 OR CAST(published_year AS TEXT) ILIKE $1)";
    countQuery += whereClause;
    dataQuery += whereClause;
    queryParams.push(searchQuery);
  }

  //Add sorting, limit, and offset
  dataQuery += ` ORDER BY manga_id ASC LIMIT $${
    queryParams.length + 1
  } OFFSET $${queryParams.length + 2}`;
  queryParams.push(limit, offset);

  //Execute both queries
  const countResult = await pool.query(
    countQuery,
    hasSearch ? [searchQuery] : []
  );
  const total = parseInt(countResult.rows[0].total, 10) || 0;

  const result = await pool.query(dataQuery, queryParams);

  return {
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: page,
    data: result.rows,
  };
};

module.exports = {
  searchManga,
  getAllManga,
  getMangaById,
  addManga,
  updateManga,
  deleteManga,
  findDuplicate,
  getPaginatedManga,
};
