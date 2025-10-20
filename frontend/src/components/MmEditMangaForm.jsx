import { useState } from "react";
import MmSuccessModal from "./MmSuccessModal";

function MmEditMangaForm({ manga, onUpdate, isEditFormOpen, onEditFormClose }) {
  const [newTitle, setNewTitle] = useState(manga.title || "");
  const [newAuthor, setNewAuthor] = useState(manga.author || "");
  const [newGenre, setNewGenre] = useState(manga.genre || "");
  const [newPublishedYear, setNewPublishedYear] = useState(
    manga.published_year || ""
  );
  const [newCoverImage, setNewCoverImage] = useState(null);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();

    if (
      !newTitle.trim() ||
      !newAuthor.trim() ||
      !newGenre.trim() ||
      !newPublishedYear
    ) {
      return null;
    }

    onUpdate(
      manga.manga_id,
      newTitle,
      newAuthor,
      newGenre,
      newPublishedYear,
      newCoverImage
    );
    setSuccessModalOpen(true);
  };

  if (!isEditFormOpen) return null;
  return (
    <>
      <div
        onClick={onEditFormClose}
        className="fixed top-0 flex items-center justify-center w-screen h-screen px-4 z-70 bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-72 bg-[#fcf5e6] border-2 rounded-lg shadow-[4px_4px_0px_0px] flex flex-col items-center justify-center"
        >
          <header className="flex flex-row items-center justify-between w-full border-b-2">
            <p className="p-2 text-sm">Edit Manga</p>
            <p className="gap-1 px-2 text-base select-none">
              ⦾ ⦾
              <span
                onClick={onEditFormClose}
                className="text-base text-blue-500 cursor-pointer"
              >
                {" "}
                ⦿
              </span>
            </p>
          </header>

          <form
            onSubmit={handleEdit}
            className="flex flex-col items-center gap-2 p-2 px-4"
          >
            <div>
              <label className="text-sm opacity-80">Edit manga title:</label>
              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                type="text"
                placeholder={manga.title}
                className="border-1 px-2 py-1 rounded shadow-[2px_2px_0px_0px] placeholder:text-xs text-sm"
              />
            </div>
            <div>
              <label className="text-sm opacity-80">Edit author:</label>
              <input
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                type="text"
                placeholder={manga.author}
                className="border-1 px-2 py-1 rounded shadow-[2px_2px_0px_0px] placeholder:text-xs text-sm"
              />
            </div>
            <div>
              <label className="text-sm opacity-80">Edit genre:</label>
              <input
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)}
                type="text"
                placeholder={manga.genre}
                className="border-1 px-2 py-1 rounded shadow-[2px_2px_0px_0px] placeholder:text-xs text-sm"
              />
            </div>
            <div>
              <label className="text-sm opacity-80">Edit published year:</label>
              <input
                value={newPublishedYear}
                onChange={(e) => setNewPublishedYear(e.target.value)}
                type="number"
                placeholder={manga.published_year}
                className="border-1 px-2 py-1 rounded shadow-[2px_2px_0px_0px] placeholder:text-xs text-sm"
              />
            </div>

            <div>
              <label className="text-sm opacity-80">Replace manga cover:</label>
              <input
                onChange={(e) => setNewCoverImage(e.target.files[0])}
                type="file"
                accept="image/*"
                className="border-1 file:px-2 file:py-1 file:text-sm cursor-pointer text-sm rounded shadow-[2px_2px_0px_0px] w-full "
              />
            </div>

            <section className="flex flex-row items-end justify-end w-full gap-2 py-2 pt-4">
              <button className="px-2 border-1 rounded text-sm bg-blue-500 text-[#fcf5e6] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] cursor-pointer">
                Update
              </button>
              <button
                type="button"
                onClick={onEditFormClose}
                className="opacity-70 px-2 border-1 rounded text-sm shadow-[2px_2px_0px_0px] cursor-pointer"
              >
                Cancel
              </button>
            </section>
          </form>
        </div>
      </div>

      <MmSuccessModal
        title={`Update Successful!`}
        message={`Manga successfully updated!`}
        isSuccessModalOpen={isSuccessModalOpen}
        onSuccessModalClose={() => {
          setSuccessModalOpen(false);
          onEditFormClose();
        }}
      />
    </>
  );
}

export default MmEditMangaForm;
