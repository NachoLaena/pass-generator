import "./lengthBar.css";
import { useContext } from "react";
import { PassGenContext } from "../context/PassGenContext";

export const LengthBar = () => {
  const { barLength, setBarLength } = useContext(PassGenContext);

  const labelOnChange = (e) => {
    setBarLength(e.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-3">
      <div className="flex items-center mb-2">
        <label htmlFor="length">Length:</label>
        <div className="flex items-center justify-center ml-1 h-8 w-8 border-2 border-[var(--dark-purple)] rounded font-bold">
          {barLength}
        </div>
      </div>
      <input type="range" min="6" max="30" step="1" onChange={labelOnChange} />
    </div>
  );
};
