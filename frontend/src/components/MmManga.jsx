function MmManga({ manga }) {
  return (
    <>
      <li>
        <img
          src={`http://localhost:5000/uploads/${manga.cover_image}`}
          alt={`${manga.title} cover image`}
        />
        <h1>{manga.title}</h1>
        <p>{manga.author}</p>
        <p>{manga.genre}</p>
        <p>{manga.published_year}</p>
      </li>
    </>
  );
}

export default MmManga;
