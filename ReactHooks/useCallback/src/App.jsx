import React, { useCallback, useState } from 'react'
import './App.css'
import Header from './components/Header';

const App = () => {

  const [count, setCount] = useState(0);

  const newFn = useCallback(() => {}, [])

  return (
    <>
    <Header newFn={newFn}/>
    <h1>{count}</h1>
    <button onClick={()=>setCount(prev => prev + 1)}>Click Here</button>
    </>
  )
}

export default App