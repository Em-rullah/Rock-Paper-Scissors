import { useContext } from "react";
import { Context } from "./App";
import { OrbitProgress } from "react-loading-indicators";

function Move({ move, game, last, side }) {
  const { setIsPlayed, setSelectedMove, housePlay, result } =
    useContext(Context);
  if (!game)
    return (
      <label
        htmlFor={move.move}
        className={`${last ? "col-span-full" : ""} ${move.styleMain} cursor-pointer rounded-full md:scale-125`}
      >
        <button
          onClick={() => {
            setIsPlayed((state) => !state);
            setSelectedMove(move.move);
            setTimeout(function () {
              housePlay();
            }, 1500);
          }}
          id={move.move}
          className="rounded-full bg-white p-5 shadow-[inset_0_6px_0_0_rgba(0,0,0,0.2)]"
        >
          <img className="h-12 w-10" src={`images/icon-${move.move}.svg`} />
        </button>
      </label>
    );

  if (game)
    return (
      <div
        className={`${move.styleGame} ${result == "YOU WIN" && side === "player" ? move.styleWin : ""} ${result == "YOU LOSE" && side === "house" ? move.styleWin : ""} rounded-full md:scale-[150%] xl:scale-[200%]`}
      >
        {!move ? (
          <div className="p-5">
            <OrbitProgress color="#fff" />
          </div>
        ) : (
          <div className="rounded-full bg-white p-5 shadow-[inset_0_6px_0_0_rgba(0,0,0,0.2)]">
            <img className="h-12 w-10" src={`images/icon-${move.move}.svg`} />
          </div>
        )}
      </div>
    );
}

export default Move;
