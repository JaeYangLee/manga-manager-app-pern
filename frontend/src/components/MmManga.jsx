function MmManga({ manga, onUpdate, onDelete }) {
  return (
    <>
      <div>
        <li className="flex flex-col items-center justify-center rounded py-2 px-4 gap-2 border-1 shadow-[4px_4px_0px_0px]">
          <img
            src={`http://localhost:5000/uploads/${manga.cover_image}`}
            alt={`${manga.title} cover image`}
            className="w-40"
          />
          <section className="flex flex-col items-center justify-center">
            <h1 className="text-lg font-bold">{manga.title}</h1>
            <p className="text-sm">
              <span>Author: </span>
              {manga.author}
            </p>
            <p className="text-sm">
              <span>Genre: </span>
              {manga.genre}
            </p>
            <p className="text-sm">
              <span>Published year: </span>
              {manga.published_year}
            </p>
          </section>

          <section className="w-full flex flex-row items-center justify-center gap-2 p-2">
            <button
              onClick={onUpdate}
              className="text-sm px-2 border-1 rounded shadow-[2px_2px_0px_0px]"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="text-sm px-2 border-1 rounded shadow-[2px_2px_0px_0px]"
            >
              Delete
            </button>
          </section>
        </li>
      </div>
    </>
  );
}

export default MmManga;
