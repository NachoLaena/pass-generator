import { PassGenProvider } from "./context/PassGenContext";
import { LengthBar } from "./components/lengthBar";
import { options } from "./constants";
import { Option } from "./components/option";
import { Password } from "./components/password";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main className="h-screen flex justify-center items-center overflow-hidden">
      <Toaster />
      <div className="flex p-4 flex-col items-center">
        <h1 className="font-bold text-[var(--dark-purple)] text-3xl">
          Password Generator
        </h1>
        <div className="m-3 text-[var(--chamoisee)]">
          What do you want to include?
        </div>
        <PassGenProvider>
          <div className="flex justify-center gap-3">
            <Option text={options.low} />
            <Option text={options.up} />
            <Option text={options.numbers} />
            <Option text={options.special} />
          </div>
          <LengthBar />
          <div className="m-3">Your password:</div>
          <Password />
        </PassGenProvider>
      </div>
    </main>
  );
}

export default App;
