import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `count ( ${count} )`;
  });
  // console.log("hello 1");
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}
