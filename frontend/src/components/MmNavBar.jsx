function MmNavBar({ onAdd }) {
  return (
    <>
      <div className="flex flex-row items-center justify-between fixed w-screen h-14 z-60 top-0 bg-[gray] px-2">
        <div>
          <h1>MM*</h1>
          <h1 className="hidden">Manga Manager App *</h1>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <input
            type="search"
            placeholder="search..."
            className="border-1 rounded px-2 w-[40vw]"
          />
          <button className="px-2 border-1 rounded">Add</button>
        </div>
      </div>
    </>
  );
}

export default MmNavBar;
