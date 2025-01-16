import { useContext, useState } from "react";
import Footer from "./Footer";
import MainContainer from "./MainContainer";
import Header from "./Header";
import Rules from "./Rules";
import GameContainer from "./GameContainer";
import { Context } from "./App";

function Layout() {
  const [isRulesOpen, setisRulesOpen] = useState(false);

  const { isPlayed } = useContext(Context);

  function handleRuleClick() {
    setisRulesOpen((state) => !state);
  }

  return (
    <>
      <main
        className={`${isRulesOpen && "brightness-50"} relative grid h-screen w-screen grid-rows-[2fr_3fr_1fr] items-center justify-center justify-items-center text-nowrap bg-gradient-to-br from-[#1f3756] to-[#141539]`}
      >
        <Header />
        {isPlayed ? <GameContainer /> : <MainContainer />}
        <Footer onClick={handleRuleClick} />
      </main>
      {isRulesOpen && <Rules onClick={handleRuleClick} />}
    </>
  );
}

export default Layout;
