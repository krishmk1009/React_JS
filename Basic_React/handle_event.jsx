import React, { useState } from "react";

function App() {
  const [heding, setHeading] = useState("Hello");
  function updateHeading() {
    setHeading("submitted");

    // console.log("clkicked");
  }
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    // console.log("hover");
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{heding}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={updateHeading}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
