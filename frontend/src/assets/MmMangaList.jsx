import MmManga from "./MmManga";

function MmCatalogPage({ mangas = [], onUpdate, onDelete }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ul className="flex flex-col items-center justify-center gap-4">
        {mangas.filter === 0 ? (
          <div className="flex flex-col items-center justify-center w-screen h-screen">
            <p>No Manga Found...</p>
          </div>
        ) : (
          mangas.map((mangas) => (
            <MmManga
              key={mangas.manga_id}
              manga={mangas}
              onUpdate={onUpdate}
              onDelete={() => onDelete(mangas.manga_id)}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default MmCatalogPage;
