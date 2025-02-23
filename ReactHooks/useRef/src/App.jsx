import React from 'react'
import { useRef } from 'react'
import './App.css'
const App = () => {
  const inputElement = useRef()

  const btnClicked = () => {

    if(inputElement.current.value !== ""){
      inputElement.current.style.background = "blue";
      console.log(inputElement.current.value);
    } else{
      alert("Please enter some text")
    }

  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={btnClicked}>Click Here</button>
    </>
  )
}

export default App