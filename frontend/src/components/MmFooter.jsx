function MmFooter() {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full items-center justify-between h-[56px] px-4 text-sm text-center">
        <section>
          © {new Date().getFullYear()} <span>Jian Lee Ramos</span>. All rights
          reserved.
        </section>

        <section className="hidden md:flex">
          <p>Built with love using PostgreSQL, Express, React and Node.</p>
        </section>
      </div>
    </>
  );
}

export default MmFooter;
