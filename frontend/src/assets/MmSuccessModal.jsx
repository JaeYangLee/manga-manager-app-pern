import React from "react";

function MmSuccessModal({
  title,
  message,
  subject,
  isSuccessModalOpen,
  onSuccessModalClose,
}) {
  if (!isSuccessModalOpen) return null;
  return (
    <>
      <div
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen p-4 bg-black/70 z-70"
        onClick={onSuccessModalClose}
      >
        <div
          className="flex flex-col items-center justify-center gap-4 p-2 py-4 bg-white rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <section className="p-2 text-center">
            <h1 className="font-bold text-1xl">{title}</h1>
            <p className="text-sm font-light">
              <span className="text-blue-500">{subject}</span>
              {message}
            </p>
          </section>

          <button
            onClick={onSuccessModalClose}
            className="px-2 text-sm rounded border-1"
          >
            Okay
          </button>
        </div>
      </div>
    </>
  );
}

export default MmSuccessModal;
