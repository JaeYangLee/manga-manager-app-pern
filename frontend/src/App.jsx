import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

function App() {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    getAllMangas();
  }, []);

  const getAllMangas = async () => {
    try {
      const res = await axios.get("http://localhost:/5000/mangas");
      setMangas(res);
    } catch (err) {
      console.error("GET: Error Fetching All Mangas!", err.message);
    }
  };

  const getMangaById = async () => {
    try {
      const res = await axios.get("http://localhost:/5000/mangas");
      setMangas(res);
    } catch (err) {
      console.error("GET: Error Fetching Manga By Id!", err.message);
    }
  };

  const addManga = async () => {
    try {
      const res = await axios.post("http://localhost:/5000/mangas");
      setMangas([...mangas, res.data]);
    } catch (err) {
      console.error("POST: Error Adding Manga!", err.message);
    }
  };

  const updateManga = async () => {
    try {
      const res = await axios.put(`http://localhost:/5000/mangas/${manga_id}`);
      setMangas(
        mangas.map((manga) => (manga.manga_id === id ? res.data : manga))
      );
    } catch (err) {
      console.error("PUT: Error Updating Manga!", err.message);
    }
  };

  const deleteManga = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:/5000/mangas/${manga_id}`
      );
      setMangas(mangas.filter((manga) => manga.manga_id !== manga.id));
    } catch (err) {
      console.error("DELETE: Error Deleting Manga!", err.message);
    }
  };

  return (
    <>
      <div className="w-screen h-screen">
        <header>
          <h1>Manga Manager App</h1>
        </header>

        <main>
          <h1>Catalog Page</h1>
        </main>
      </div>
    </>
  );
}

export default App;
