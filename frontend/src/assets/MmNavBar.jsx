import { useState } from "react";
import MmNewMangaForm from "./MmNewMangaForm";

function MmNavBar({ onAdd }) {
  const [isNewMangaFormOpen, setNewMangaFormOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 flex flex-row justify-center w-screen gap-2 p-2 text-xs bg-blue-100 z-60 h-14 item-center">
        <section className="flex flex-row items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Search your manga..."
            className="w-[50vw] h-full border-1 rounded px-2"
          />
          <button
            onClick={() => setNewMangaFormOpen(true)}
            className="px-2 text-xl text-center rounded-full border-1"
          >
            +
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
