import React, { useState } from "react";

function App() {

//getting current time
  let currentDate = new Date();
  let time =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

    //usestate and initialization
  let [currentTime, setTime] = useState(time);
  //console.log(currentTime);

//creating a onclick function
  function getTime() {
    let currentDate = new Date();
    let newTime =
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();

    setTime(newTime);
    
  }

  // this will change the time dynamically
  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
