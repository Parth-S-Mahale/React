import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [count, setCount] = useState(0)

  const btnClicked = () => {
    setCount(count + 1)
  }
  const btnClick = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={btnClicked}>Increase</button>
      <button onClick={btnClick}>Decrease</button>
    </div>
  )
}

export default App