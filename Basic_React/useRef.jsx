import React, { useRef } from 'react'
import axios from 'axios'

import './App.css'


function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // console.log(inputRef.current.value);
    // inputRef.current.focus();
    inputRef.current.value= "";
  }

  return (
    <React.StrictMode>
      <div className="App">
        <p>Hello</p>
        <input type="text" placeholder='write' ref={inputRef} />
        <button onClick={handleClick}>Submit</button>
      </div>
    </React.StrictMode>
  )
}

export default App
