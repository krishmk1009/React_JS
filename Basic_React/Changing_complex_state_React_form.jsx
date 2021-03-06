import React, { useState } from "react";

function App() {
  const [name, setName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          lName: value,
          fName: prevValue.fName
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {name.fName} {name.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          // value={name.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          // value={name.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
