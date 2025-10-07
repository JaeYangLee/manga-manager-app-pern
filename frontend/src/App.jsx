import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import MmMangaList from "./assets/MmMangaList";
import MmNavBar from "./assets/MmNavBar";

function App() {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    getAllMangas();
  }, []);

  const getAllMangas = async () => {
    try {
      const res = await axios.get("http://localhost:5000/mangas");
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
      console.error("POST: Error Adding Manga!", err.message);
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
      <div className="w-screen h-screen">
        <header className="flex items-center justify-center p-4 text-2xl font-bold">
          <MmNavBar onAdd={addManga} />
        </header>

        <main className="pt-14">
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
