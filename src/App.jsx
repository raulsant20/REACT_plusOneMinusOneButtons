import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Contador } from "./components/Contador";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Practicing React</h1>
      <p>Starting in 0, you can add o remove one unit</p>
      <div className="card">
        <Contador />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
