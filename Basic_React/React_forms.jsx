import React, { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [heading, setHeading] = useState();

  function updateChange(event) {
    // console.log("hello");
    setName(event.target.value);
    // console.log(event.target.value);
  }

  function handleCLick(event) {
    // console.log("clicked");
    setHeading(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={handleCLick}>
        <input
          onChange={updateChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
