function MmSuccessModal({
  title,
  subject,
  message,
  isSuccessModalOpen,
  onSuccessModalClose,
}) {
  if (!isSuccessModalOpen) return null;
  return (
    <div
      className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen px-4 z-70 bg-black/50"
      onClick={onSuccessModalClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#fcf5e6] flex flex-col items-center justify-center border-2 shadow-[4px_4px_0px_0px] rounded-lg"
      >
        <header className="flex flex-row justify-end w-full border-b-1">
          <p className="gap-1 px-2 text-base ">
            ⦾ ⦾
            <span
              onClick={onSuccessModalClose}
              className="text-base text-green-500"
            >
              {" "}
              ⦿
            </span>
          </p>
        </header>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="my-1 text-green-400 size-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <section className="flex flex-col items-center justify-center px-4 text-center">
          <h1 className="pt-1 text-base font-bold">{title}</h1>
          <p className="text-sm">
            <span className="text-green-500 ">{subject}</span>
            {message}
          </p>
        </section>

        <button
          onClick={onSuccessModalClose}
          className="px-2 my-4 text-sm rounded border-1 border-[#2d2d26] bg-green-400  shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] cursor-pointer"
        >
          Okay!
        </button>
      </div>
    </div>
  );
}

export default MmSuccessModal;
