import Move from "./Move";
import { Context } from "./App";
import { useContext, useEffect } from "react";
import GameItems from "./GameItems";
import { ThreeDot } from "react-loading-indicators";

function GameContainer() {
  const {
    setResult,
    result,
    moveFinder,
    setSelectedMove,
    setIsPlayed,
    selectedMove,
    selectedHouseMove,
    setSelectedHouseMove,
    handleLogic,
  } = useContext(Context);

  useEffect(
    function () {
      handleLogic();
    },
    [handleLogic],
  );

  const houseBg =
    "h-[100px] w-[100px] opacity-25 md:h-[150px] md:w-[150px] bg-gray-700 rounded-full";

  return (
    <section className="grid h-full w-full grid-cols-2 grid-rows-2 items-start justify-around md:w-[80vw] md:grid-cols-3 md:grid-rows-1 md:justify-between lg:w-[70vw]">
      <GameItems text={"YOU PICKED"}>
        <Move
          side={"player"}
          game={true}
          move={moveFinder(selectedMove) || ""}
        />
      </GameItems>

      <GameItems text={"THE HOUSE PICKED"}>
        <Move
          side={"house"}
          game={true}
          move={moveFinder(selectedHouseMove) || ""}
        />
      </GameItems>

      <div className="col-span-full flex h-full w-full flex-col justify-center self-center justify-self-center md:col-span-1 md:col-start-2 md:row-start-1">
        <h3
          className={`my-4 text-center text-6xl font-extrabold text-white md:my-8 lg:text-7xl xl:text-8xl ${result === "YOU LOSE" ? "!text-red-500" : ""}`}
        >
          {result || <ThreeDot color="#fff" />}
        </h3>
        <button
          disabled={!result}
          onClick={() => {
            setIsPlayed((state) => !state);
            setSelectedMove("");
            setSelectedHouseMove("");
            setResult("");
          }}
          className={`${!result && "hidden"} w-full rounded-xl border-2 bg-white py-3 text-lg tracking-[2px] hover:opacity-75`}
        >
          PLAY AGAIN
        </button>
      </div>
    </section>
  );
}

export default GameContainer;
