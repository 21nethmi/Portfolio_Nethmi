import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="h-24 p-6 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="h-24 p-6 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin-slow transition-all"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-8">Vite + React</h1>
      <div className="bg-gray-800 p-8 rounded-lg">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium transition-colors border border-transparent hover:border-blue-500"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-400">
          Edit{" "}
          <code className="bg-gray-700 px-2 py-1 rounded">src/App.jsx</code> and
          save to test HMR
        </p>
      </div>
      <p className="mt-8 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
