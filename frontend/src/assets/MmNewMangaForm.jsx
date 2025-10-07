import { useState } from "react";

function MmNewMangaForm({ onAdd, isNewMangaFormOpen, onNewMangaFormClose }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [published_year, setPublishedYear] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      onAdd(title, author, genre, published_year);
      alert("Manga Successfully Added!");
      setTitle("");
      setAuthor("");
      setGenre("");
      setPublishedYear("");
    } catch (err) {
      console.error("POST: Error Adding Manga!", err.message);
    }
  };

  if (!isNewMangaFormOpen) return null;
  return (
    <>
      <div
        onClick={onNewMangaFormClose}
        className="fixed top-0 flex items-center justify-center w-screen h-screen px-8 z-60 bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col gap-3 p-4 bg-white rounded"
        >
          <header>Add New Manga</header>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <section className="flex flex-col gap-2">
              <legend className="text-sm font-light">
                <label>Enter manga title:</label>
                <input
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="ie. One Piece"
                  className="px-2 text-base font-normal rounded placeholder:text-xs border-1"
                />
              </legend>
              <legend className="text-sm font-light">
                <label>Enter manga author:</label>
                <input
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  type="text"
                  placeholder="ie. Eiichiro Oda"
                  className="px-2 text-base font-normal rounded placeholder:text-xs border-1"
                />
              </legend>
              <legend className="text-sm font-light">
                <label>Enter manga genre:</label>
                <input
                  required
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  type="text"
                  placeholder="ie. Adventure"
                  className="px-2 text-base font-normal rounded placeholder:text-xs border-1"
                />
              </legend>
              <legend className="text-sm font-light">
                <label>Enter manga published year:</label>
                <input
                  required
                  value={published_year}
                  onChange={(e) => setPublishedYear(e.target.value)}
                  type="text"
                  placeholder="ie. 1997"
                  className="px-2 text-base font-normal rounded placeholder:text-xs border-1"
                />
              </legend>
            </section>

            <section className="flex flex-row items-end justify-end gap-2">
              <button className="px-2 text-sm rounded border-1">Add</button>
              <button
                type="button"
                onClick={onNewMangaFormClose}
                className="px-2 text-sm rounded border-1"
              >
                Cancel
              </button>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}

export default MmNewMangaForm;
