import { useContext } from "react";
import { Context } from "./App";

function Header() {
  const { score } = useContext(Context);
  return (
    <div className="flex w-[95vw] justify-between rounded-xl border-[3px] border-solid border-[#606e85] p-3 md:w-[80vw] lg:w-[70vw] lg:p-5">
      <img
        className="scale-[.70] lg:scale-100"
        src="images/logo.svg"
        alt="rock paper scissors brand image"
      />
      <div className="flex w-24 flex-col items-center justify-center rounded-xl bg-white lg:w-32">
        <p className="text-xs tracking-[2px] text-[#2a46c0] lg:text-sm">
          SCORE
        </p>
        <p className="text-5xl font-extrabold text-[#3b4363] lg:text-6xl">
          {score}
        </p>
      </div>
    </div>
  );
}

export default Header;
