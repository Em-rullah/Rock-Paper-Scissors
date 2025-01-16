function Rules({ onClick }) {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-around rounded-xl bg-white md:grid md:h-max md:w-max md:grid-cols-2 md:grid-rows-[1fr_5fr] md:gap-y-12 md:p-5">
      <h2 className="text-4xl font-extrabold text-[#3b4363] md:text-2xl">
        RULES
      </h2>
      <img
        className="col-span-full md:row-span-2"
        src="images/image-rules.svg"
      />
      <div className="flex hover:opacity-70 active:opacity-70 md:col-start-2 md:row-start-1 md:justify-self-end">
        <button onClick={onClick}>
          <img className="scale-150 md:scale-100" src="images/icon-close.svg" />
        </button>
      </div>
    </div>
  );
}

export default Rules;

// DÜZELT
