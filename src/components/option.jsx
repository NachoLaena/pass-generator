import { useState, useContext } from "react";
import { PassGenContext } from "../context/PassGenContext";
import {text} from "../constants"

// COLORS: --dark-purple --nyanza --bole --chamoisee --raisin-black

export const Option = ({ text }) => {
  const [isActive, setIsActive] = useState(true);
  const {toogleIsLower, toogleIsUpper, toogleIsNum, toogleIsSpecial} = useContext(PassGenContext);

  const handleClick = () => {
    setIsActive(!isActive);

    switch (text) {
      case text.low:
        toogleIsLower();
        break;
      case text.up:
        toogleIsUpper();
        break;
      case text.numbers:
        toogleIsNum();
        break;
      case text.special:
        toogleIsSpecial();
        break;
    }
  };

  return (
    <button
      className={`flex justify-center p-4 rounded-xl border-2 cursor-pointer user-select-none font-bold transition-all
        ${
          isActive
            ? "text-[var(--nyanza)] bg-[#199856] border-[var(--raisin-black)]"
            : "text-[var(--raisin-black)] bg-[#7e7e7e] border-[var(--raisin-black)]"
        }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

