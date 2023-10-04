import { createContext, useContext, useState } from "react";

const PassGenContext = createContext(null);

export const PassGenProvider = ({ children }) => {
  return (
    <PassGenContext.Provider value={null}>{children}</PassGenContext.Provider>
  );
};
