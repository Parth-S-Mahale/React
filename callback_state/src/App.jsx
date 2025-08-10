import { useState } from 'react';
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  let handleCount = () => {

    // setCount((prev) => {
    //   return prev + 1
    // });

    // setCount((prev) => {
    //   return prev + 1
    // });
    
    setCount(25);
  }

  return ( 
    <>
    <h1>Count: {count}</h1>
    <button onClick={handleCount}>Increase Count</button>
    </>
  );
}

export default App
