import MmManga from "./MmManga";

function MmMangaList({ mangas = [], onUpdate, onDelete }) {
  return (
    <>
      <ul className="p-2">
        {mangas.map((manga) => (
          <MmManga
            key={manga.manga_id}
            manga={manga}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}

export default MmMangaList;
