import { createContext, useCallback, useMemo, useState } from "react";
import Layout from "./Layout";

export const Context = createContext();

function App() {
  const [result, setResult] = useState("");
  const [isPlayed, setIsPlayed] = useState(false);
  const [selectedMove, setSelectedMove] = useState("");
  const [selectedHouseMove, setSelectedHouseMove] = useState("");
  const [score, setScore] = useState(0);

  const moves = useMemo(
    () => [
      {
        move: "scissors",

        styleMain:
          "bg-gradient-to-br from-[#ec9e0e] to-[#eca922] hover:rotate-12 hover:shadow-[0_0_20px_10px_#ec9e0e,0_0_0_60px_#0a141e2b,0_0_0_90px_#0a141e2b] active:rotate-12 active:shadow-[0_0_20px_10px_#ec9e0e,0_0_0_60px_#0a141e2b,0_0_0_90px_#0a141e2b] p-5 shadow-[0_6px_0_0_#ec9e0e58]",
        styleGame: `bg-gradient-to-br from-[#ec9e0e] to-[#eca922] p-5 shadow-[0_6px_0_0_#ec9e0e58] transition-shadow duration-500`,
        styleWin:
          "!shadow-[0_0_20px_10px_#ec9e0e,0_0_0_60px_#0a141e2b,0_0_0_90px_#0a141e2b]  ",
      },

      {
        move: "paper",

        styleMain:
          "bg-gradient-to-br from-[#4865f4] to-[#5671f5] hover:rotate-12 hover:shadow-[0_0_20px_10px_#4865f4,0_0_0_60px_#0a141e2b,0_0_0_90px_#0a141e2b] active:rotate-12 active:shadow-[0_0_20px_10px_#4865f4,0_0_0_60px_#0a141e2b,0_0_0_90px_#0a141e2b] p-5 shadow-[0_6px_0_0_#4865f458]",
        styleGame: `bg-gradient-to-br transition-shadow from-[#4865f4] to-[#5671f5] p-5 shadow-[0_6px_0_0_#4865f458] duration-500`,
        styleWin:
          "!shadow-[0_0_20px_10px_#4865f4,0_0_0_60px_#0a141e2b,0_0_0_90px_#0a141e2b]",
      },
      {
        move: "rock",

        styleMain:
          "bg-gradient-to-br from-[#dc2e4e] to-[#dd405d] hover:rotate-12 hover:shadow-[0_0_20px_10px_#dc2e4e,0_0_0_60px_#0a141e2b,0_0_0_90px_#0a141e2b] active:rotate-12 active:shadow-[0_0_20px_10px_#dc2e4e,0_0_0_60px_#0a141e2b,0_0_0_90px_#0a141e2b]  p-5 shadow-[0_6px_0_0_#dc2e4e58]",
        styleGame: `bg-gradient-to-br transition-shadow from-[#dc2e4e] to-[#dd405d] p-5 shadow-[0_6px_0_0_#dc2e4e58] duration-500`,
        styleWin:
          "!shadow-[0_0_20px_10px_#dc2e4e,0_0_0_60px_#0a141e2b,0_0_0_90px_#0a141e2b]",
      },
    ],
    [],
  );

  function moveFinder(name) {
    return moves.find((item) => item.move === name);
  }

  function housePlay() {
    const num = Math.floor(Math.random() * 3);
    if (num === 0) setSelectedHouseMove("rock");
    if (num === 1) setSelectedHouseMove("paper");
    if (num === 2) setSelectedHouseMove("scissors");
  }

  const handleLogic = useCallback(() => {
    if (selectedMove === selectedHouseMove) setResult("TIE");
    if (selectedMove === "rock") {
      if (selectedHouseMove === "paper") {
        setResult("YOU LOSE");
        setScore((score) => score - 1);
      }
      if (selectedHouseMove === "scissors") {
        setResult("YOU WIN");
        setScore((score) => score + 1);
      }
    }
    if (selectedMove === "paper") {
      if (selectedHouseMove === "scissors") {
        setResult("YOU LOSE");
        setScore((score) => score - 1);
      }
      if (selectedHouseMove === "rock") {
        setResult("YOU WIN");
        setScore((score) => score + 1);
      }
    }
    if (selectedMove === "scissors") {
      if (selectedHouseMove === "rock") {
        setResult("YOU LOSE");
        setScore((score) => score - 1);
      }
      if (selectedHouseMove === "paper") {
        setResult("YOU WIN");
        setScore((score) => score + 1);
      }
    }
  }, [selectedHouseMove, selectedMove]);

  return (
    <Context.Provider
      value={{
        moves,
        moveFinder,
        handleLogic,
        housePlay,
        score,
        result,
        setResult,
        isPlayed,
        setIsPlayed,
        selectedMove,
        setSelectedMove,
        selectedHouseMove,
        setSelectedHouseMove,
      }}
    >
      <Layout />
    </Context.Provider>
  );
}

export default App;
