import { useState } from "react";
import MmNewMangaForm from "./MmNewMangaForm";

function MmNavBar({ onAdd }) {
  const [isNewMangaFormOpen, setNewMangaFormOpen] = useState(false);
  return (
    <>
      <div className="flex flex-row items-center justify-between fixed w-screen h-14 z-60 top-0 bg-[#fcf5e6] px-2 border-b-2">
        <div>
          <h1>MM*</h1>
          <h1 className="hidden">Manga Manager App *</h1>
        </div>

        <div className="flex flex-row items-center justify-center gap-2">
          <input
            type="search"
            placeholder="search..."
            className="border-1 rounded px-2 py-1 w-[40vw] placeholder:text-sm text-sm"
          />
          <button
            onClick={() => setNewMangaFormOpen(true)}
            className="px-2 border-1 rounded-full text-base shadow-[2px_2px_0px_0px]"
          >
            +
          </button>
        </div>
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
