import { useState } from "react";
import MmDeleteValidator from "./MmDeleteValidator";
import MmEditMangaForm from "./MmEditMangaForm";

function MmManga({ manga, onUpdate, onDelete }) {
  const [isDeleteValidatorOpen, setDeleteValidor] = useState(false);
  const [isEditMangaFormOpen, setEditMangaFormOpen] = useState(false);
  return (
    <>
      <div className="w-full h-full p-2 bg-[#fcf5e7] rounded border-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]">
        <li className="flex flex-col items-center justify-center gap-2 text-center">
          <section>
            <h1 className="text-lg font-bold">{manga.title}</h1>
          </section>

          <section className="text-xs">
            <p>Author: {manga.author}</p>
            <p>Genre: {manga.genre}</p>
            <p>Published year: {manga.published_year}</p>
          </section>

          <section className="flex flex-row gap-2 text-xs">
            <button
              className="px-2 rounded border-1"
              onClick={() => setEditMangaFormOpen(true)}
            >
              Edit
            </button>
            <button
              className="px-2 rounded border-1"
              onClick={() => setDeleteValidor(true)}
            >
              Delete
            </button>
          </section>
        </li>
      </div>

      <MmEditMangaForm
        isEditMangaFormOpen={isEditMangaFormOpen}
        onEditMangaFormClose={() => setEditMangaFormOpen(false)}
      />

      <MmDeleteValidator
        onDelete={onDelete}
        title={`Delete this manga?`}
        message={` will be forever removed from your catalog...`}
        subject={manga.title}
        isDeleteValidatorOpen={isDeleteValidatorOpen}
        onDeleteValidatorClose={() => setDeleteValidor(false)}
      />
    </>
  );
}

export default MmManga;
