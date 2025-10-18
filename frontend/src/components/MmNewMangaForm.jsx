import React, { useState } from "react";

function MmNewMangaForm({
  manga,
  onAdd,
  isNewMangaFormOpen,
  onNewMangaFormClose,
}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [published_year, setPublishedYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title.trim() ||
      !author.trim() ||
      !genre.trim() ||
      !published_year.trim()
    ) {
      return;
    }

    onAdd(title, author, genre, published_year);
  };

  if (!isNewMangaFormOpen) return null;
  return (
    <>
      <div
        className="flex flex-col items-center justify-center bg-black/60 fixed w-screen h-screen top-0 z-70 px-2"
        onClick={onNewMangaFormClose}
      >
        <div
          className="w-72 bg-[#fcf5e6] rounded-lg flex flex-col items-center justify-center border-2 shadow-[4px_4px_0px_0px]"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="w-full flex flex-row items-center justify-between px-3 py-2 border-b-2">
            <h1 className="text-sm ">Add new manga</h1>
            <p className="gap-1 text-base">
              ⦾ ⦾
              <span onClick={onNewMangaFormClose} className="text-base">
                {" "}
                ⦿
              </span>
            </p>
          </header>

          <form
            onSubmit={handleSubmit}
            className="p-2 px-4 flex flex-col item-start gap-2"
          >
            <div>
              <label className="text-sm opacity-80">Enter manga title:</label>
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="ie. One Piece"
                className="border-1 px-2 py-1 rounded shadow-[2px_2px_0px_0px] placeholder:text-xs text-sm"
              />
            </div>
            <div>
              <label className="text-sm opacity-80">Enter author:</label>
              <input
                required
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="ie. Eiichiro Oda"
                className="border-1 px-2 py-1 rounded shadow-[2px_2px_0px_0px] placeholder:text-xs text-sm"
              />
            </div>
            <div>
              <label className="text-sm opacity-80">Enter genre:</label>
              <input
                required
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                type="text"
                placeholder="ie. Adventure"
                className="border-1 px-2 py-1 rounded shadow-[2px_2px_0px_0px] placeholder:text-xs text-sm"
              />
            </div>
            <div>
              <label className="text-sm opacity-80">
                Enter published year:
              </label>
              <input
                required
                value={published_year}
                onChange={(e) => setPublishedYear(e.target.value)}
                type="number"
                placeholder="ie. 1997"
                className="border-1 px-2 py-1 rounded shadow-[2px_2px_0px_0px] placeholder:text-xs text-sm"
              />
            </div>

            <section className="flex flex-row items-end justify-end gap-2 py-2 pt-4">
              <button className="px-2 border-1 rounded text-sm bg-[#2d2d26] text-[#fcf5e6] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]">
                Add
              </button>
              <button
                type="button"
                onClick={onNewMangaFormClose}
                className="opacity-70 px-2 border-1 rounded text-sm shadow-[2px_2px_0px_0px]"
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
