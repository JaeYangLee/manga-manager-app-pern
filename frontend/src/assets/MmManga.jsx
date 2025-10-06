import React from "react";

function MmManga({ manga, onUpdate, onDelete }) {
  return (
    <div className="bg-white border-1 rounded p-2">
      <li className="flex flex-col items-center justify-center gap-2 text-center">
        <section>
          <h1 className="font-bold text-lg">{manga.title}</h1>
        </section>

        <section className="text-xs">
          <p>Author: {manga.author}</p>
          <p>Genre: {manga.genre}</p>
          <p>Published year: {manga.published_year}</p>
        </section>

        <section className="text-xs flex flex-row gap-2">
          <button className="border-1 px-2 rounded">Edit</button>
          <button className="border-1 px-2 rounded" onClick={onDelete}>
            Delete
          </button>
        </section>
      </li>
    </div>
  );
}

export default MmManga;
