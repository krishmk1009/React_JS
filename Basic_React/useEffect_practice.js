import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'


function App() {
  const [data, setData] = useState("")
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {

        setData(response.data[0].email)
        console.log('api was called');
      });


  }, [])

  console.log('rendering App');

  return (
    <React.StrictMode>
      <div className="App">
        <p>{data}</p>
      </div>
    </React.StrictMode>
  )
}

export default App
