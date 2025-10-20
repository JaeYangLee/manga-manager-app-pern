function MmDeleteValidator({
  manga,
  onDelete,
  title,
  subject,
  message,
  isDeleteValidatorOpen,
  onDeleteValidatorClose,
}) {
  if (!isDeleteValidatorOpen) return null;
  return (
    <>
      <div
        onClick={onDeleteValidatorClose}
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen px-4 bg-black/60 z-70"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center justify-center bg-[#fcf5e6] border-1 shadow-[4px_4px_0px_0px] rounded-lg"
        >
          <header className="flex flex-row justify-end w-full border-b-2">
            <p className="gap-1 px-2 text-base ">
              ⦾ ⦾
              <span
                onClick={onDeleteValidatorClose}
                className="text-base text-red-500"
              >
                {" "}
                ⦿
              </span>
            </p>
          </header>

          <section className="flex flex-col items-center justify-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="my-4 text-red-500 size-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>

            <h1 className="px-2 text-xl font-bold">{title}</h1>
            <p className="px-4 text-sm text-center">
              <span className="text-red-500">{subject}</span>
              {message}
            </p>
          </section>

          <section className="flex flex-row justify-end w-full gap-2 p-4 text-sm">
            <button
              onClick={() => onDelete(manga.manga_id)}
              className="px-2 text-white bg-red-500 rounded  shadow-[3px_3px_0px_0px_rgba(0,0,0,0.75)]"
            >
              Delete
            </button>
            <button
              onClick={onDeleteValidatorClose}
              className="px-2 rounded border-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
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
