import React from "react";

function MmNavBar() {
  return (
    <>
      <div className="p-2 fixed top-0 z-60 w-screen h-14 bg-[darkgray] flex flex-row item-center justify-center text-xs gap-2">
        <section className="flex flex-row items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Search your manga..."
            className="w-[50vw] h-full border-1 rounded px-2"
          />
          <button className="border-1 px-2 text-xl rounded-full text-center">
            +
          </button>
        </section>
      </div>
    </>
  );
}

export default MmNavBar;
