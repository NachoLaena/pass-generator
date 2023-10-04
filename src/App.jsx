import { useState } from "react";
import { PassGenProvider } from "./context/PassGenContext";
import { Option } from "./components/option";
import {text} from "./constants"

// COLORS: --dark-purple --nyanza --bole --chamoisee --raisin-black

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="h-screen flex justify-center items-center overflow-hidden">
      <div className="flex p-4 flex-col items-center">
        <h1 className="font-bold text-[var(--dark-purple)] text-3xl">Password Generator</h1>
        <div className="m-3 text-[var(--chamoisee)]">What do you want to include?</div>
        <PassGenProvider>
          <div className="flex justify-center gap-3">
            <Option text={text.low} />
            <Option text={text.up} />
            <Option text={text.numbers} />
            <Option text={text.special} />
          </div>
        </PassGenProvider>
        <div className="m-3">Your password:</div>
      </div>
    </main>
  );
}

export default App;
