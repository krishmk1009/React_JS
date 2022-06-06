import React, { useState } from "react";

function App() {
  const [inputText, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newVal = event.target.value;

    setInput(newVal);
  }
  function handleCLick() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={inputText} type="text" />
        <button onClick={handleCLick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoList) => {
            return <li>{todoList}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
