function MmErrorModal({
  title,
  subject,
  message,
  isErrorModalOpen,
  onErrorModalClose,
}) {
  if (!isErrorModalOpen) return null;
  return (
    <>
      <div
        onClick={onErrorModalClose}
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen p-4 z-60 bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col gap-3 bg-[#fcf5e7] rounded-2xl border-3 border-[#2c2f29] shadow-[#2c2f29] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.75)]"
        >
          <header className="flex flex-row items-center justify-between gap-12 md:gap-2 px-4 py-1 text-lg border-b-3 border-[#2c2f29] text-[#2c2f29]">
            <h1 className="font-bold opacity-0">WhiteSpace</h1>
            <p className="select-none">
              {`◎ ◎`}{" "}
              <span
                onClick={onErrorModalClose}
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
              className="text-red-500 bi bi-exclamation-octagon-fill size-12"
              viewBox="0 0 16 16"
            >
              <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>

            <div className="flex flex-col items-center justify-center text-center text-[#2c2f29] p-2">
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="px-2 text-base">
                <span className="text-sm text-red-500">{subject}</span>
                {message}
              </p>
            </div>
          </div>

          <div className="flex flex-row items-end justify-end gap-2 p-2">
            <button
              onClick={onErrorModalClose}
              className="px-2 bg-red-500 rounded border-1 border-[#2c2f29] text-[#fcf5e7] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)]"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MmErrorModal;
