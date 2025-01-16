import { useContext } from "react";
import Move from "./Move";
import { Context } from "./App";

function MainContainer() {
  const { moves } = useContext(Context);
  return (
    <section className="grid h-full w-full grid-cols-2 grid-rows-2 items-center justify-items-center bg-[url(/images/bg-triangle.svg)] bg-auto bg-center bg-no-repeat max-[450px]:bg-[length:70%] sm:w-[85vw] md:w-[60vw] lg:w-[40vw]">
      {moves.map((_, index) => (
        <Move
          key={index}
          last={index === moves.length - 1}
          move={moves[index]}
        />
      ))}
    </section>
  );
}

export default MainContainer;
