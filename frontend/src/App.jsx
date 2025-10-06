import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import MmMangaList from "./assets/MmMangaList";

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

  const addManga = async () => {
    try {
      const res = await axios.post("http://localhost:5000/mangas");
      setMangas([...mangas, res.data]);
    } catch (err) {
      console.error("POST: Error Adding Manga!", err.message);
    }
  };

  const updateManga = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/mangas/${manga_id}`);
      setMangas(
        mangas.map((manga) => (manga.manga_id === manga_id ? res.data : manga))
      );
    } catch (err) {
      console.error("PUT: Error Updating Manga!", err.message);
    }
  };

  const deleteManga = async () => {
    try {
      await axios.delete(`http://localhost:5000/mangas/${manga_id}`);
      setMangas(mangas.filter((mangas) => mangas.manga_id !== manga_id));
    } catch (err) {
      console.error("DELETE: Error Deleting Manga!", err.message);
    }
  };

  return (
    <>
      <div className="w-screen h-screen">
        <header className="flex items-center justify-center font-bold text-2xl p-4">
          <h1>Manga Manager App</h1>
        </header>

        <main>
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
