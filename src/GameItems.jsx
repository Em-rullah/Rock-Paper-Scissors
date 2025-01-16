function GameItems({ children, text }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:h-full md:w-full md:justify-start md:gap-24">
      <h2 className="text-base font-bold tracking-[2px] text-white md:text-2xl">
        {text}
      </h2>
      {children}
    </div>
  );
}

export default GameItems;
