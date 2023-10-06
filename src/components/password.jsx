import { useEffect, useState, useContext } from "react";
import { PassGenContext } from "../context/PassGenContext";
import { FaRedoAlt } from "react-icons/fa";

export const Password = () => {
  const [password, setPassword] = useState("password");
  const { settings, barLength } = useContext(PassGenContext);
  const ops = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{};:,./<>?",
  };

  const generateNewOps = () => {
    let newOps = { ...ops };

    if (!settings.isLower) {
      delete newOps.lower;
    }
    if (!settings.isUpper) {
      delete newOps.upper;
    }
    if (!settings.isNum) {
      delete newOps.numbers;
    }
    if (!settings.isSpecial) {
      delete newOps.symbols;
    }

    return newOps;
  };

  const generatePassword = () => {
    if (
      !settings.isLower &&
      !settings.isUpper &&
      !settings.isNum &&
      !settings.isSpecial
    ) {
      setPassword("Select at least one option");
      return;
    }

    let newPassword = "";
    let newOps = generateNewOps();
    let opsLength = Object.keys(newOps).length;

    console.log(newOps);

    for (let i = 0; i < barLength; i++) {
      const randomOption = Math.floor(Math.random() * opsLength);
      const randomChar = Math.floor(
        Math.random() * newOps[Object.keys(newOps)[randomOption]].length
      );
      newPassword += newOps[Object.keys(newOps)[randomOption]][randomChar];
    }
    setPassword(newPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [settings, barLength]);

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(e.currentTarget.textContent);
  };

  return (
    <div className="flex justify-center items-center bg-[var(--dark-purple)] rounded p-2">
      <p
        className="text-center font-bold text-xl text-[var(--nyanza)] cursor-pointer max-w-[280px] overflow-hidden"
        onClick={copyToClipboard}
      >
        {password}
      </p>
      <button className="ml-3" onClick={generatePassword}>
        {password !== "Select at least one option" && (
          <FaRedoAlt className="w-6 h-6 text-[#dcdcdcff]" />
        )}
      </button>
    </div>
  );
};
