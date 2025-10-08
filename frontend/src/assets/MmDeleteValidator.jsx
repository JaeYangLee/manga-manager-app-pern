import React from "react";

function MmDeleteValidator({
  onDelete,
  title,
  message,
  subject,
  isDeleteValidatorOpen,
  onDeleteValidatorClose,
}) {
  if (!isDeleteValidatorOpen) return null;
  return (
    <>
      <div
        onClick={onDeleteValidatorClose}
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen p-4 z-60 bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col gap-3 w-full bg-[#fcf5e7] rounded-2xl border-3 border-[#2c2f29] shadow-[#2c2f29] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.75)]"
        >
          <header className="flex flex-row items-center justify-between gap-12 md:gap-2 px-4 py-1 text-lg border-b-3 border-[#2c2f29] text-[#2c2f29]">
            <h1 className="font-bold opacity-0">WhiteSpace</h1>
            <p className="select-none">
              {`◎ ◎`}{" "}
              <span
                onClick={onDeleteValidatorClose}
                className="text-red-500 cursor-pointer"
              >{`◉`}</span>{" "}
            </p>
          </header>

          <div className="flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-red-500 bi bi-trash3-fill size-12"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>

            <div className="flex flex-col items-center justify-center text-center text-[#2c2f29] p-2">
              <h1 className="text-2xl font-bold">Are you sure?</h1>
              <p className="px-2 text-base">
                <span className="text-sm text-red-500">{subject}</span> will be
                removed from your catalog.
              </p>
            </div>
          </div>

          <div className="flex flex-row items-end justify-end gap-2 p-2">
            <button
              onClick={onDelete}
              className="px-2 bg-red-500 rounded border-1 border-[#2c2f29] text-[#fcf5e7] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
            >
              Delete
            </button>
            <button
              onClick={onDeleteValidatorClose}
              className="px-2 rounded border-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] opacity-70"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MmDeleteValidator;
