import React, { useRef, useEffect } from 'react'
import axios from 'axios'

import './App.css'


function App() {
  const inputRef = useRef(null);

  
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.value = "start writing"


  }, [])

  return (
    <React.StrictMode>
      <div className="App">
        <p>Hello</p>
        <input type="text" placeholder='write' ref={inputRef} />
        <button type='submit'>Submit</button>
      </div>
    </React.StrictMode>
  )
}

export default App
