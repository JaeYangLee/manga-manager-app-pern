import { useState } from "react";
import MmSuccessModal from "./MmSuccessModal";
import MmErrorModal from "./MmErrorModal";

function MmNewMangaForm({ onAdd, isNewMangaFormOpen, onNewMangaFormClose }) {
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [modalTitleDisplay, setModalTitleDisplay] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [published_year, setPublishedYear] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (
        !title.trim() ||
        !author.trim() ||
        !genre.trim() ||
        !published_year.trim()
      ) {
        return;
      }

      await onAdd(title, author, genre, published_year);

      setModalTitleDisplay(title);
      setSuccessModalOpen(true);

      setTitle("");
      setAuthor("");
      setGenre("");
      setPublishedYear("");
    } catch (err) {
      setErrorModalOpen(true);
      console.error("POST: Error Adding Manga!", err.message);
    }
  };

  if (!isNewMangaFormOpen) return null;
  return (
    <>
      <div
        onClick={onNewMangaFormClose}
        className="fixed top-0 flex items-center justify-center w-screen h-screen p-4 z-60 bg-black/60"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col gap-3 bg-[#fcf5e7] rounded-2xl border-3 border-[#2c2f29] shadow-[#2c2f29] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.75)]"
        >
          <header className="flex flex-row items-center justify-between gap-12 md:gap-2 px-4 py-1 text-lg border-b-3 border-[#2c2f29] text-[#2c2f29]">
            <h1 className="font-bold">Add new manga</h1>
            <p className="select-none">
              {`◎ ◎`}{" "}
              <span
                onClick={onNewMangaFormClose}
                className="cursor-pointer"
              >{`◉`}</span>{" "}
            </p>
          </header>

          <form onSubmit={handleSubmit} className="flex flex-col gap-12 p-2">
            <section className="flex flex-col gap-4">
              <div className="flex flex-col text-sm font-light">
                <label className="text-xs">Enter manga title:</label>
                <input
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="ie. One Piece"
                  className="px-2 py-1 w-full md:w-[30vw] rounded placeholder:text-xs border-1 text-base font-light shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                />
              </div>
              <div className="flex flex-col text-sm font-light">
                <label className="text-xs">Enter author:</label>
                <input
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  type="text"
                  placeholder="ie. Eiichiro Oda"
                  className="px-2 py-1 w-full md:w-[30vw] rounded placeholder:text-xs border-1 text-base font-light shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                />
              </div>
              <div className="flex flex-col text-sm font-light">
                <label className="text-xs">Enter genre:</label>
                <input
                  required
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  type="text"
                  placeholder="ie. Adventure"
                  className="px-2 py-1 w-full md:w-[30vw] rounded placeholder:text-xs border-1 text-base font-light shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                />
              </div>
              <div className="flex flex-col text-sm font-light">
                <label className="text-xs">Enter published year:</label>
                <input
                  required
                  value={published_year}
                  onChange={(e) => setPublishedYear(e.target.value)}
                  type="number"
                  placeholder="ie. 1997"
                  className="px-2 py-1 w-full md:w-[30vw] rounded placeholder:text-xs border-1 text-base font-light shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                />
              </div>
            </section>

            <section className="flex flex-row items-end justify-end gap-2">
              <button className="px-3 text-sm rounded border-1 bg-[#2c2f29] text-[#fcf5e7] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]">
                Add
              </button>
              <button
                type="button"
                onClick={onNewMangaFormClose}
                className="px-2 text-sm rounded border-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] opacity-70"
              >
                Cancel
              </button>
            </section>
          </form>
        </div>
      </div>

      <MmSuccessModal
        title={"New manga added!"}
        subject={modalTitleDisplay}
        message={` is now on your manga list!`}
        isSuccessModalOpen={isSuccessModalOpen}
        onSuccessModalClose={() => {
          onNewMangaFormClose();
          setSuccessModalOpen(false);
        }}
      />

      <MmErrorModal
        title={"Manga already existing!"}
        subject={title}
        message={" is already in your catalog!"}
        isErrorModalOpen={isErrorModalOpen}
        onErrorModalClose={() => setErrorModalOpen(false)}
      />
    </>
  );
}

export default MmNewMangaForm;
