import { useState } from 'react'
import './App.css'

function init() {
  console.log("init was executed!");
  
  return Math.random();
}

function App() {
  const [count, setCount] = useState(init);
  console.log("component was re-rendered!");
  

  let handleCount = () => {
    setCount((prev) => {
      return prev + 1
    })
  }

  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={handleCount}>Increase count</button>
    </>
  )
}

export default App
