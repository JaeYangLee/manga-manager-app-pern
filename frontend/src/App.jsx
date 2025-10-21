import { useState, useEffect } from "react";
import axios from "axios";
import MmNavBar from "./components/MmNavBar";
import MmMangaList from "./components/MmMangaList";

function App() {
  const [mangas, setMangas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAllManga();
  }, [search]);

  const fetchAllManga = async () => {
    try {
      let url = `http://localhost:5000/mangas`;

      if (search) {
        url += `?search=${encodeURIComponent(search)}`;
      }

      const res = await axios.get(url);
      setMangas(res.data.data);
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
      return { status: "success" };
    } catch (err) {
      console.error("[POST /frontend]: Error adding new manga", err.message);

      if (err.response) {
        console.error("Response Data:", err.response.data);
        console.error("Response Status:", err.response.status);
      }

      if (err.response && err.response.status === 400) {
        return { status: "duplicate", message: err.response.data.message };
      }

      return { status: "error", message: err.message };
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
      await axios.delete(`http://localhost:5000/mangas/${manga_id}`);
      setMangas((prevMangas) =>
        prevMangas.filter((manga) => manga.manga_id !== manga_id)
      );
    } catch (err) {
      console.error("[DELETE /frontend]: Error deleting manga!", err.message);
    }
  };

  return (
    <>
      <div className="font-mono text-[#2d2d26]">
        <MmNavBar onAdd={addManga} search={search} setSearch={setSearch} />

        <div className="flex flex-col items-center justify-center pt-16">
          <MmMangaList
            mangas={mangas}
            onUpdate={updateManga}
            onDelete={deleteManga}
          />
        </div>
      </div>
    </>
  );
}

export default App;
