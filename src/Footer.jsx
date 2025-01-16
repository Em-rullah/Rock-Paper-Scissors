function Footer({ onClick }) {
  return (
    <footer className="flex w-screen justify-center lg:justify-end lg:px-12">
      <button
        onClick={onClick}
        className="rounded-xl border-2 border-white px-12 py-3 tracking-[2px] text-white hover:opacity-70 active:opacity-70"
      >
        RULES
      </button>
    </footer>
  );
}

export default Footer;
