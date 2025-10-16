import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [mangas, setMangas] = useState([]);

  const fetchAllManga = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/mangas`);
      setMangas(res.data);
    } catch (err) {
      console.error("[GET /fronted]: Error fetching all mangas!", err.message);
    }
  };

  const fetchMangaById = async (manga_id) => {
    try {
      const res = await axios.get(`http://localhost:5000/mangas/${manga_id}`);
      setMangas(res.data.data);
    } catch (err) {
      console.error(
        "[GET /frontend]: Error fetching manga by id!",
        err.message
      );
    }
  };

  const addManga = async (
    title,
    author,
    genre,
    published_year,
    cover_image
  ) => {
    try {
      //this is to accept multipart upload or form data
      const formData = new FormData();

      formData.append("title", title);
      formData.append("author", author);
      formData.append("genre", genre);
      formData.append("published_year", published_year);
      formData.append("cover_image", cover_image);

      const res = await axios.post(`http://localhost:5000/mangas`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMangas([...mangas, res.data.data]);
    } catch (err) {
      console.error("[POST /frontend]: Error adding new manga!", err.message);
    }
  };

  const updateManga = async (
    manga_id,
    title,
    author,
    genre,
    published_year,
    cover_image
  ) => {
    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("author", author);
      formData.append("genre", genre);
      formData.append("published_year", published_year);
      formData.append("cover_image", cover_image);

      const res = await axios.put(
        `http://localhost:5000/mangas/${manga_id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMangas((prevMangas) =>
        prevMangas.map((manga) =>
          manga.manga_id === manga_id ? res.data.data : manga
        )
      );
    } catch (err) {
      console.error("[PUT /frontend]: Error updating manga!", err.message);
    }
  };

  const deleteManga = async (manga_id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/mangas/${manga_id}`
      );
      setMangas((prevMangas) =>
        prevMangas.filter((manga) => manga.manga_id !== manga_id)
      );
    } catch (err) {
      console.error("[DELETE /frontend]: Error deleting manga!", err.message);
    }
  };

  return (
    <>
      <div>
        <h1>Hello World!</h1>
      </div>
    </>
  );
}

export default App;
