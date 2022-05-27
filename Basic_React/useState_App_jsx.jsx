import React, { useState } from "react";

function App() {
  //usestate gives two value , 1st - initial and 2nd a function
  let [count, setCount] = useState(0); // initial value
  // console.log(count);

  function increase() {
    setCount(count++);
  }
  function reset() {
    setCount((count = 0));
  }
  function decrease() {
    setCount(count--);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
