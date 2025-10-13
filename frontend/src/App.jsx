import { useState, useEffect } from "react";

import axios from "axios";
import MmMangaList from "../src/pages/MmMangaList";
import MmNavBar from "./assets/MmNavBar";

import "./index.css";

function App() {
  const [mangas, setMangas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllMangas();
  }, [search]);

  const getAllMangas = async () => {
    try {
      let url = "http://localhost:5000/mangas";

      if (search) {
        url += `?search=${encodeURIComponent(search)}`;
      }

      const res = await axios.get(url);
      setMangas(res.data);
    } catch (err) {
      console.error("GET: Error Fetching All Mangas!", err.message);
    }
  };

  const getMangaById = async () => {
    try {
      const res = await axios.get("http://localhost:5000/mangas");
      setMangas(res.data);
    } catch (err) {
      console.error("GET: Error Fetching Manga By Id!", err.message);
    }
  };

  const addManga = async (title, author, genre, published_year) => {
    try {
      const res = await axios.post("http://localhost:5000/mangas", {
        title,
        author,
        genre,
        published_year,
      });
      setMangas([...mangas, res.data]);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        throw new Error(err.response.data.message);
      }

      console.error("POST: Error Adding Manga!", err.message);
      throw new Error("POST: Manga already exists!");
    }
  };

  const updateManga = async (
    manga_id,
    title,
    author,
    genre,
    published_year
  ) => {
    try {
      const res = await axios.put(`http://localhost:5000/mangas/${manga_id}`, {
        manga_id,
        title,
        author,
        genre,
        published_year,
      });
      setMangas(
        mangas.map((manga) => (manga.manga_id === manga_id ? res.data : manga))
      );
    } catch (err) {
      console.error("PUT: Error Updating Manga!", err.message);
    }
  };

  const deleteManga = async (manga_id) => {
    try {
      await axios.delete(`http://localhost:5000/mangas/${manga_id}`, {
        manga_id,
      });
      setMangas(mangas.filter((mangas) => mangas.manga_id !== manga_id));
    } catch (err) {
      console.error("DELETE: Error Deleting Manga!", err.message);
    }
  };

  return (
    <>
      <div className="w-screen h-screen font-mono">
        <header className="flex items-center justify-center text-2xl font-bold">
          <MmNavBar onAdd={addManga} search={search} setSearch={setSearch} />
        </header>

        <main className="pt-16">
          <MmMangaList
            mangas={mangas}
            onUpdate={updateManga}
            onDelete={deleteManga}
          />
        </main>
      </div>
    </>
  );
}

export default App;
