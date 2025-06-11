import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(444);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Number that we try to fix our sleep is {count}
        </button>
        <p>It works, you will be number one in coding...</p>
      </div>
      <p className="read-the-docs">Hasan-Kanaya is the best</p>
      <p>Now it should work</p>
      <h4>10y from now you will arrive question where</h4>
      <p>--Jim Rohn</p>
    </>
  );
}

export default App;
