import { useState } from "react";
import "./Contador.css";
export function Contador() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <span id="count">{num}</span>
      <button
        id="add"
        onClick={(e) => {
          setNum((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={(e) => {
          if (num > 0) {
            setNum((prev) => prev - 1);
          } else {
            alert("Ya esta en 0");
          }
        }}
      >
        -1
      </button>
    </div>
  );
}
