import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);
  console.log("Component is rendered!");
  console.log(`count = ${counter}`);
  

  let InCounter = () => {
    setCounter(counter + 1);
    console.log(`inside Incounter, count = ${counter}`);    
  }

  let DeCounter = () => {
    if (counter === 0){
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
    <h1>COUNTER PROGRAM</h1>
    <p>Counter: {counter}</p>
    <button onClick={InCounter}>counte+</button>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={DeCounter}>counte-</button>
    </>
  )
}

export default App
