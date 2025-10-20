function MmManga({ manga, onUpdate, onDelete }) {
  return (
    <>
      <div>
        <li className="mb-4 flex flex-col items-center justify-center rounded py-2 px-4 gap-2 border-1 shadow-[4px_4px_0px_0px] bg-[#fcf5e6]">
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
              onClick={onUpdate}
              className="text-sm px-2 border-1 rounded shadow-[2px_2px_0px_0px] bg-blue-400"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(manga.manga_id)}
              className="text-sm px-2 border-1 rounded shadow-[2px_2px_0px_0px] bg-red-400"
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
