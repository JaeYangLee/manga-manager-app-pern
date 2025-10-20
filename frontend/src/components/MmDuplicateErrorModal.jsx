function MmDuplicateErrorModal({
  isDuplicateErrorModalOpen,
  onDuplicateErrorModalClose,
}) {
  if (!isDuplicateErrorModalOpen) return null;

  return (
    <>
      <div
        className="flex items-center justify-center w-screen h-screen bg-black/50 fixed top-0 z-70"
        onClick={onDuplicateErrorModalClose}
      >
        <div className="flex flex-col items-center justify-center rounded-lg border-2 bg-[#fcf5e6] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.75)]">
          <header className="flex flex-row w-full justify-end border-b-2 ">
            <p className="gap-1 text-base select-none px-2">
              ⦾ ⦾
              <span
                onClick={onDuplicateErrorModalClose}
                className="text-base cursor-pointer text-red-500"
              >
                {" "}
                ⦿
              </span>
            </p>
          </header>

          <section className="flex flex-col items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-16 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>

            <h1 className="px-2 font-bold">Manga Already Exist!</h1>
          </section>

          <button
            onClick={onDuplicateErrorModalClose}
            className="px-2 border-1 rounded my-2 bg-[#2d2d26] text-white  shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
          >
            Okay
          </button>
        </div>
      </div>
    </>
  );
}

export default MmDuplicateErrorModal;
