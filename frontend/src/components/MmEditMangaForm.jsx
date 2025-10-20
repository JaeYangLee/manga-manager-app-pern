function MmEditMangaForm({ onEdit, isEditFormOpen, onEditFormClose }) {
  if (!isEditFormOpen) return null;
  return (
    <>
      <div
        onClick={onEditFormClose}
        className="fixed top-0 flex items-center justify-center w-screen h-screen px-4 z-80 bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-72 bg-[#fcf5e6] border-2 rounded-lg shadow-[4px_4px_0px_0px] flex flex-col items-center justify-center"
        >
          <header className="flex flex-row items-center justify-between w-full border-b-2">
            <p className="p-2 text-sm">Edit Manga</p>
            <p className="gap-1 px-2 text-base ">
              ⦾ ⦾
              <span
                onClick={onEditFormClose}
                className="text-base text-blue-500"
              >
                {" "}
                ⦿
              </span>
            </p>
          </header>

          <form className="flex flex-col items-center gap-2 p-2 px-4">
            <div>
              <label className="text-sm opacity-80">Enter manga title:</label>
              <input
                required
                type="text"
                placeholder="ie. One Piece"
                className="border-1 px-2 py-1 rounded shadow-[2px_2px_0px_0px] placeholder:text-xs text-sm"
              />
            </div>
            <div>
              <label className="text-sm opacity-80">Enter author:</label>
              <input
                required
                type="text"
                placeholder="ie. Eiichiro Oda"
                className="border-1 px-2 py-1 rounded shadow-[2px_2px_0px_0px] placeholder:text-xs text-sm"
              />
            </div>
            <div>
              <label className="text-sm opacity-80">Enter genre:</label>
              <input
                required
                type="text"
                placeholder="ie. Adventure"
                className="border-1 px-2 py-1 rounded shadow-[2px_2px_0px_0px] placeholder:text-xs text-sm"
              />
            </div>
            <div>
              <label className="text-sm opacity-80">
                Enter published year:
              </label>
              <input
                required
                type="number"
                placeholder="ie. 1997"
                className="border-1 px-2 py-1 rounded shadow-[2px_2px_0px_0px] placeholder:text-xs text-sm"
              />
            </div>

            <div>
              <label className="text-sm opacity-80">Upload manga cover:</label>
              <input
                required
                type="file"
                accept="image/*"
                className="border-1 file:px-2 file:py-1 file:text-sm cursor-pointer text-sm rounded shadow-[2px_2px_0px_0px] w-full "
              />
            </div>

            <section className="flex flex-row items-end justify-end w-full gap-2 py-2 pt-4">
              <button className="px-2 border-1 rounded text-sm bg-blue-500 text-[#fcf5e6] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]">
                Update
              </button>
              <button
                type="button"
                className="opacity-70 px-2 border-1 rounded text-sm shadow-[2px_2px_0px_0px]"
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
