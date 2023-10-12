import React from "react";
import { useEffect, useState, useContext } from "react";
import { PassGenContext } from "../context/PassGenContext";
import { FaRedoAlt } from "react-icons/fa";
import toast from "react-hot-toast";

export const Password = () => {
  const [password, setPassword] = useState("password");
  const { settings, barLength } = useContext(PassGenContext);
  const ops = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{};:,./<>?",
  };

  const ClipBoardNotify = () =>
    toast.success("Copied to clipboard!", {
      position: "top-right",
    });

  const PasswordNotify = () =>
    toast("Password generated!", {
      position: "top-right",
    });

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

  const msgNoOpsSelected = "Select at least one option";

  const generatePassword = () => {
    let newOps = generateNewOps();

    if (Object.keys(newOps).length === 0) {
      setPassword(msgNoOpsSelected);
      return;
    }

    let newPassword = "";
    let opsLength = Object.keys(newOps).length;

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
    ClipBoardNotify();
  };

  return (
    <div className="flex justify-center items-center bg-[var(--dark-purple)] rounded p-2">
      <p
        className='text-center font-bold text-xl text-[var(--nyanza)] cursor-pointer max-w-[280px] overflow-x-scroll whitespace-nowrap'
        onClick={password !== msgNoOpsSelected && copyToClipboard}
      >
        {password}
      </p>
      <button className="" onClick={generatePassword}>
        {password !== "Select at least one option" && (
          <FaRedoAlt
            className="ml-2 w-6 h-6 text-[#dcdcdcff]"
            onClick={PasswordNotify}
          />
        )}
      </button>
    </div>
  );
};
