import { useReducer } from 'react'

import './App.css'

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1, showText: state.showText };
    case "toggleText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });


  const handleClick = () => {
    setCount(count + 1);
    setText(!text);

  }

  return (
    <div className="App">
      <p>{state.count}</p>
      <button onClick={()=>{
        dispatch({type:"Increment"})
        dispatch({type:"toggleText"})
      }} >Change</button>
      {state.showText && <p> hello</p>}
    </div>
  )
}

export default App
