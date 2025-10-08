import { useState } from "react";
import MmNewMangaForm from "./MmNewMangaForm";

function MmNavBar({ onAdd }) {
  const [isNewMangaFormOpen, setNewMangaFormOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 flex flex-row  justify-between w-screen gap-2 p-2 text-xs bg-[#fcf5e7] z-60 h-14 px-2 item-center border-b-3 border-[#2c2f29]">
        <h1 className="md:hidden text-2xl text-[#2c2f29] border-1 px-2 rounded bg-[#ffb19d] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] text-center">
          MM<span className="text-[#fcf5e7]">*</span>
        </h1>
        <h1 className="hidden md:flex text-2xl text-[#2c2f29] border-1 px-2 rounded bg-[#ffb19d] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] text-center">
          MangaManager<span className="text-[#fcf5e7]">*</span>
        </h1>
        <section className="flex flex-row items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Search your manga..."
            className="w-[50vw] h-8 border-1 rounded px-3 border-[#2c2f29] placeholder:font-light font-light placeholder:text-xs text-xs  shadow-[#2c2f29]"
          />
          <button
            onClick={() => setNewMangaFormOpen(true)}
            className="text-xl text-center rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="bi bi-plus-circle text-[#2c2f29] size-8 shadow-[#2c2f29] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] rounded-full"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </button>
        </section>
      </div>

      <MmNewMangaForm
        onAdd={onAdd}
        isNewMangaFormOpen={isNewMangaFormOpen}
        onNewMangaFormClose={() => setNewMangaFormOpen(false)}
      />
    </>
  );
}

export default MmNavBar;
