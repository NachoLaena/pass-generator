import { createContext, useState } from "react";
export const PassGenContext = createContext(null);

export const PassGenProvider = ({ children }) => {
  const [barLength, setBarLength] = useState(30);
  const [settings, setSettings] = useState({
    isLower: true,
    isUpper: true,
    isNum: true,
    isSpecial: true,
  });

  const toggleIsLower = () => {
    setSettings((prev) => ({ ...prev, isLower: !prev.isLower }));
  };

  const toggleIsUpper = () => {
    setSettings((prev) => ({ ...prev, isUpper: !prev.isUpper }));
  };
  
  const toggleIsNum = () => {
    setSettings((prev) => ({ ...prev, isNum: !prev.isNum }));
  };
  
  const toggleIsSpecial = () => {
    setSettings((prev) => ({ ...prev, isSpecial: !prev.isSpecial }));
  };

  return (
    <PassGenContext.Provider
      value={{
        settings,
        toggleIsLower,
        toggleIsUpper,
        toggleIsNum,
        toggleIsSpecial,
        barLength,
        setBarLength,
      }}
    >
      {children}
    </PassGenContext.Provider>
  );
};
