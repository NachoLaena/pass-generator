import { useEffect, useState, useContext } from "react";
import { PassGenContext } from "../context/PassGenContext";


export const Password = () => {
  const [password, setPassword] = useState("password");
  const { settings, barLength } = useContext(PassGenContext);
  const ops = {
    abc: "abcdefghijklmnopqrstuvwxyz",
    ABC: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{};:,./<>?"
  };

  const generatePassword = () => {
    let newPassword = "";
    for (let i = 0; i < barLength; i++) {
      const randomOption = Math.floor(Math.random() * 4);
      const randomChar = Math.floor(Math.random() * ops[Object.keys(ops)[randomOption]].length);
      newPassword += ops[Object.keys(ops)[randomOption]][randomChar];
    }
    setPassword(newPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [settings, barLength]);

  return (
    <div className="w-full">
      <p className="text-center font-bold text-xl">{password}</p>
    </div>
  );
};
