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
          className="flex flex-col items-center justify-center gap-4 px-4 py-2 bg-white rounded"
        >
          <section className="text-center">
            <h1 className="text-xl font-bold">{title}</h1>
            <p>
              <span className="text-red-500">{subject}</span>
              {message}
            </p>
          </section>

          <section className="flex flex-row justify-center gap-2 item-center">
            <button
              onClick={onDelete}
              className="px-2 text-white bg-red-500 rounded border-1"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={onDeleteValidatorClose}
              className="px-2 rounded border-1"
            >
              Cancel
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default MmDeleteValidator;
