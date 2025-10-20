import React, { useState } from "react";
import MmSuccessModal from "./MmSuccessModal";
import MmDuplicateErrorModal from "./MmDuplicateErrorModal";

function MmNewMangaForm({ onAdd, isNewMangaFormOpen, onNewMangaFormClose }) {
  const [title, setTitle] = useState("");
  const [titleDisplay, setTitleDisplay] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [published_year, setPublishedYear] = useState("");
  const [cover_image, setCoverImage] = useState(null);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isDuplicateErrorModalOpen, setDuplicateErrorModalOpen] =
    useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (
        !title.trim() ||
        !author.trim() ||
        !genre.trim() ||
        !published_year.trim() ||
        !cover_image
      ) {
        return;
      }
      setTitleDisplay(title);
      await onAdd(title, author, genre, published_year, cover_image);

      setSuccessModalOpen(true);

      setTitle("");
      setAuthor("");
      setGenre("");
      setPublishedYear("");
      setCoverImage(null);
    } catch (err) {
      setTitleDisplay(title);
      setDuplicateErrorModalOpen(true);
      setTitle("");
      setAuthor("");
      setGenre("");
      setPublishedYear("");
      setCoverImage(null);
    }
  };

  if (!isNewMangaFormOpen) return null;
  return (
    <>
      <div
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen px-2 bg-black/60 z-70"
        onClick={onNewMangaFormClose}
      >
        <div
          className="w-72 bg-[#fcf5e6] rounded-lg flex flex-col items-center justify-center border-2 shadow-[4px_4px_0px_0px]"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex flex-row items-center justify-between w-full px-3 py-2 border-b-2">
            <h1 className="text-sm ">Add new manga</h1>
            <p className="gap-1 text-base select-none">
              ⦾ ⦾
              <span
                onClick={onNewMangaFormClose}
                className="text-base cursor-pointer"
              >
                {" "}
                ⦿
              </span>
            </p>
          </header>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-2 p-2 px-4"
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

            <div>
              <label className="text-sm opacity-80">Upload manga cover:</label>
              <input
                required
                onChange={(e) => setCoverImage(e.target.files[0])}
                type="file"
                accept="image/*"
                className="border-1 file:px-2 file:py-1 file:text-sm cursor-pointer text-sm rounded shadow-[2px_2px_0px_0px] w-full "
              />
            </div>

            <section className="flex flex-row items-end justify-end w-full gap-2 py-2 pt-4">
              <button className="px-2 border-1 rounded text-sm bg-[#2d2d26] text-[#fcf5e6] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] cursor-pointer">
                Add
              </button>
              <button
                type="button"
                onClick={onNewMangaFormClose}
                className="opacity-70 px-2 border-1 rounded text-sm shadow-[2px_2px_0px_0px] cursor-pointer"
              >
                Cancel
              </button>
            </section>
          </form>
        </div>
      </div>

      <MmSuccessModal
        isSuccessModalOpen={isSuccessModalOpen}
        onSuccessModalClose={() => {
          setSuccessModalOpen(false);
          onNewMangaFormClose();
        }}
        title={`Manga added successfully!`}
        subject={titleDisplay}
        message={` is now in your catalog!`}
      />

      <MmDuplicateErrorModal
        title={`Manga Already exists!`}
        subject={titleDisplay}
        message={" is already in your catalog..."}
        isDuplicateErrorModalOpen={isDuplicateErrorModalOpen}
        onDuplicateErrorModalClose={() => setDuplicateErrorModalOpen(false)}
      />
    </>
  );
}

export default MmNewMangaForm;
