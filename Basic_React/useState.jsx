import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState(true)

  const handleClick = () => {
    setCount(count+1);
    setText(!text);

  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={handleClick} >Change</button>
      {text && <p> text</p>}
    </div>
  )
}

export default App
