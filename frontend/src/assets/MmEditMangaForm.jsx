function MmEditMangaForm({
  onUpdate,
  isEditMangaFormOpen,
  onEditMangaFormClose,
}) {
  if (!isEditMangaFormOpen) return null;
  return (
    <>
      <div
        onClick={onEditMangaFormClose}
        className="fixed top-0 flex items-center justify-center w-screen h-screen p-4 z-60 bg-black/60"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col gap-3 bg-[#fcf5e7] rounded-2xl border-3 border-[#2c2f29] shadow-[#2c2f29] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.75)]"
        >
          <header className="flex flex-row items-center justify-between gap-12 md:gap-2 px-4 py-1 text-lg border-b-3 border-[#2c2f29] text-[#2c2f29]">
            <h1 className="font-bold">Edit manga</h1>
            <p className="select-none">
              {`◎ ◎`}
              <span
                onClick={onEditMangaFormClose}
                className="text-blue-500 cursor-pointer"
              >{` ◉`}</span>
            </p>
          </header>

          <form className="flex flex-col gap-12 p-2">
            <section className="flex flex-col gap-4">
              <div className="flex flex-col text-sm font-light">
                <label className="text-xs">Edit manga title:</label>
                <input
                  required
                  type="text"
                  placeholder="ie. One Piece"
                  className="px-2 py-1 w-full md:w-[30vw] rounded placeholder:text-xs border-1 text-base font-light shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                />
              </div>
              <div className="flex flex-col text-sm font-light">
                <label className="text-xs">Edit author:</label>
                <input
                  required
                  type="text"
                  placeholder="ie. Eiichiro Oda"
                  className="px-2 py-1 w-full md:w-[30vw] rounded placeholder:text-xs border-1 text-base font-light shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                />
              </div>
              <div className="flex flex-col text-sm font-light">
                <label className="text-xs">Edit genre:</label>
                <input
                  required
                  type="text"
                  placeholder="ie. Adventure"
                  className="px-2 py-1 w-full md:w-[30vw] rounded placeholder:text-xs border-1 text-base font-light shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                />
              </div>
              <div className="flex flex-col text-sm font-light">
                <label className="text-xs">Edit published year:</label>
                <input
                  required
                  type="number"
                  placeholder="ie. 1997"
                  className="px-2 py-1 w-full md:w-[30vw] rounded placeholder:text-xs border-1 text-base font-light shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
                />
              </div>
            </section>

            <section className="flex flex-row items-end justify-end gap-2">
              <button className="px-3 text-sm rounded border-1 bg-blue-500 text-[#fcf5e7] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] border-[#2c2f29]">
                Update
              </button>
              <button
                type="button"
                onClick={onEditMangaFormClose}
                className="px-2 text-sm rounded border-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] opacity-70"
              >
                Cancel
              </button>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}

export default MmEditMangaForm;
