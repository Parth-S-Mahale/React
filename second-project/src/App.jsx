import React, { useState } from "react";
import FirstComponent from "./components/FirstComponent";
const App = () => {
  const [x, setX] = useState(0);

  const btnClick = () => {
    console.log("Clicked");
    setX(x + 1);
    console.log(x);
  };

  return (
    <div className="Root">
      <h1 className="textMarkUp">Advanced Counter Program Using React :</h1>
      <button 
      className="Btn"
        onClick={() => {
          btnClick();
        }}
      >
        ClickMe
      </button>
      <FirstComponent data={x} fn={setX} />
    </div>
  );
};

export default App;
