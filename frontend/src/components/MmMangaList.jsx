import MmManga from "./MmManga";

function MmMangaList({ mangas = [], onUpdate, onDelete }) {
  return (
    <>
      <ul className="flex flex-col flex-wrap items-center justify-center gap-2 p-2 md:gap-4 md:flex-row ">
        {mangas.length === 0 ? (
          <div>
            <h1>No Manga Found...</h1>
          </div>
        ) : (
          mangas.map((manga) => (
            <MmManga
              key={manga.manga_id}
              manga={manga}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))
        )}
      </ul>
    </>
  );
}

export default MmMangaList;
