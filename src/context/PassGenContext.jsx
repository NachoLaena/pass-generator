import { createContext, useContext, useState } from "react";
export const PassGenContext = createContext(null);

export const PassGenProvider = ({ children }) => { 
  const [isLower, setIsLower] = useState(true);
  const [isUpper, setIsUpper] = useState(true);
  const [isNum, setIsNum] = useState(true);
  const [isSpecial, setIsSpecial] = useState(true);

  const toogleIsLower = () => {
    setIsLower((prev)=>!prev);
  }

  const toogleIsUpper = () => {
    setIsUpper((prev)=>!prev);
  }

  const toogleIsNum = () => {
    setIsNum((prev)=>!prev);
  }

  const toogleIsSpecial = () => {
    setIsSpecial((prev)=>!prev);
  }

  return (
    <PassGenContext.Provider
      value={{
        isLower,
        toogleIsLower,
        isUpper,
        toogleIsUpper,
        isNum,
        toogleIsNum,
        isSpecial,
        toogleIsSpecial,
      }}
    >
      {children}
    </PassGenContext.Provider>
  );
};
