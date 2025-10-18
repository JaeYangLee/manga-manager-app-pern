import MmManga from "./MmManga";

function MmMangaList({ mangas = [] }) {
  return (
    <>
      <ul>
        {mangas.map((manga) => (
          <MmManga key={manga.manga_id} manga={manga} />
        ))}
      </ul>
    </>
  );
}

export default MmMangaList;
