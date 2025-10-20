import { useState } from "react";
import MmDeleteValidator from "./MmDeleteValidator";
import MmEditMangaForm from "./MmEditMangaForm";

function MmManga({ manga, onUpdate, onDelete }) {
  const [isDeleteValidatorOpen, setDeleteValidatorOpen] = useState(false);
  const [isEditFormOpen, setEditFormOpen] = useState(false);
  return (
    <>
      <div>
        <li className="h-100 mb-4 flex flex-col items-center justify-center rounded py-2 px-4 gap-2 border-1 shadow-[4px_4px_0px_0px] bg-[#fcf5e6]">
          <img
            src={`http://localhost:5000/uploads/${manga.cover_image}`}
            alt={`${manga.title} cover image`}
            className="w-40"
          />
          <section className="flex flex-col items-center justify-center text-center">
            <h1 className="text-lg font-bold truncate w-62">{manga.title}</h1>
            <p className="text-sm truncate w-62">
              <span>Author: </span>
              {manga.author}
            </p>
            <p className="text-sm truncate w-62">
              <span>Genre: </span>
              {manga.genre}
            </p>
            <p className="text-sm truncate w-62">
              <span>Published year: </span>
              {manga.published_year}
            </p>
          </section>

          <section className="flex flex-row items-center justify-center w-full gap-2 p-2">
            <button
              onClick={() => setEditFormOpen(true)}
              className="text-sm px-2 border-1 rounded shadow-[2px_2px_0px_0px] bg-blue-400 cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={() => setDeleteValidatorOpen(true)}
              className="text-sm px-2 border-1 rounded shadow-[2px_2px_0px_0px] bg-red-400 cursor-pointer"
            >
              Delete
            </button>
          </section>
        </li>
      </div>

      <MmDeleteValidator
        onDelete={onDelete}
        manga={manga}
        title={`Are you sure?`}
        subject={manga.title}
        message={` well be removed on your catalog...`}
        isDeleteValidatorOpen={isDeleteValidatorOpen}
        onDeleteValidatorClose={() => setDeleteValidatorOpen(false)}
      />

      <MmEditMangaForm
        manga={manga}
        onUpdate={onUpdate}
        isEditFormOpen={isEditFormOpen}
        onEditFormClose={() => setEditFormOpen(false)}
      />
    </>
  );
}

export default MmManga;
