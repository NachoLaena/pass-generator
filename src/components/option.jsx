import { useState, useContext } from "react";
import { PassGenContext } from "../context/PassGenContext";
import { options } from "../constants";

// COLORS: --dark-purple --nyanza --bole --chamoisee --raisin-black

export const Option = ({ text }) => {
  const [isActive, setIsActive] = useState(true);
  const { toogleIsLower, toogleIsUpper, toogleIsNum, toogleIsSpecial } =
    useContext(PassGenContext);

  const handleClick = () => {
    setIsActive(!isActive);

    switch (text) {
      case options.low:
        toogleIsLower();
        break;
      case options.up:
        toogleIsUpper();
        break;
      case options.numbers:
        toogleIsNum();
        break;
      case options.special:
        toogleIsSpecial();
        break;
    }
  };

  return (
    <button
      className={`flex justify-center p-4 rounded-xl border-2 cursor-pointer user-select-none font-bold transition-all
      border-[var(--dark-purple)]
        ${
          isActive
            ? "text-[var(--nyanza)] bg-[var(--dark-purple)]"
            : "text-[var(--dark-purple)] bg-[var(--nyanza)]"
        }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
