import React, { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'

const App = () => {

  useEffect(() => {
    console.log("useEffect Hook Executed!");
  })

  useLayoutEffect(() => {
    console.log("useLayoutEffect Hook Executed!");
  })

  const [number, setNumber] = useState(0)

  const randomNumber = (number) => {
    setNumber(Math.floor(Math.random(number) * 10));
  }

  return (
    <div>
      <h1>Test Message</h1>
      <button onClick={randomNumber}>Generate Random Number</button>
      <h2>Generated Random Number: {number}</h2>
    </div>
  )
}

export default App