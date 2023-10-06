import { useState, useContext, useEffect } from "react";
import { PassGenContext } from "../context/PassGenContext";
import { options } from "../constants";

// COLORS: --dark-purple --nyanza --bole --chamoisee --raisin-black

export const Option = ({ text }) => {
  const [isActive, setIsActive] = useState(true);
  const [isLastActive, setIsLastActive] = useState(false);
  let cont = 0;
  const {
    settings,
    toggleIsLower,
    toggleIsUpper,
    toggleIsNum,
    toggleIsSpecial,
  } = useContext(PassGenContext);

  const handleClick = () => {
    setIsActive(!isActive);

    switch (text) {
      case options.low:
        toggleIsLower();
        break;
        case options.up:
          toggleIsUpper();
        break;
      case options.numbers:
        toggleIsNum();
        break;
        case options.special:
          toggleIsSpecial();
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
        }
        ${isLastActive ? " pointer-events-none" : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
