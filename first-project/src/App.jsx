import { useState } from "react";

const App = () => {
  const [x, setX] = useState(0);

  const btnClick = () => {
    console.log("Clicked");
    setX(x + 1);
  };

  return (
    <div className="Root">
      <h1 className="textMarkUp">Counter Program Using React :</h1>
      <button
        className="Btn"
        onClick={() => {
          btnClick();
        }}
      >
        Counter: {x}
      </button>
    </div>
  );
};

export default App;
