import React from "react";

const FirstComponent = ({ data, fn }) => {
  return (
    <div className="Root">
      <button
        className="BtnSet"
        onClick={() => {
          fn(10);
        }}
      >
        Set 10
      </button>
      <div className="dataCSS">: {data}</div>
    </div>
  );
};

export default FirstComponent;
