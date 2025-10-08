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
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen p-2 bg-black/50 z-70"
        onClick={onSuccessModalClose}
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
                onClick={onSuccessModalClose}
                className="text-green-500 cursor-pointer"
              >{`◉`}</span>{" "}
            </p>
          </header>

          <div className="flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-green-500 bi bi-check-circle-fill size-12"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>

            <div className="flex flex-col items-center justify-center text-center text-[#2c2f29] p-2">
              <h1 className="text-1xl">{title}</h1>
              <p className="px-8 text-base font-light">
                <span className="text-green-600">{subject}</span>
                {message}
              </p>
            </div>
          </div>

          <section className="flex items-center justify-center p-2 flex-center">
            <button
              type="button"
              onClick={onSuccessModalClose}
              className="px-3 text-base border-1 border-[#2c2f29] bg-[#2c2f29] rounded text-[#fcf5e7] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
            >
              Okay
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default MmSuccessModal;
