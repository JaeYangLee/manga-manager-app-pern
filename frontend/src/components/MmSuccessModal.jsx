function MmSuccessModal({
  title,
  subject,
  message,
  isSuccessModalOpen,
  onSuccessModalClose,
}) {
  // if (!isSuccessModalOpen) return null;
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
            <span onClick={onSuccessModalClose} className="text-base">
              {" "}
              ⦿
            </span>
          </p>
        </header>

        <section className="flex flex-col items-center justify-center px-2 text-center">
          <h1>{title}</h1>
          <p>
            <span className="text-green-400">{subject}</span>
            {message}
          </p>
        </section>

        <button
          onClick={onSuccessModalClose}
          className="px-2 my-2 text-sm rounded border-1"
        >
          Okay!
        </button>
      </div>
    </div>
  );
}

export default MmSuccessModal;
