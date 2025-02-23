import React from "react";
import "./App.css";
import { useReducer } from "react";

const App = () => {
  const initialState = { counter: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { counter: state.counter + 1 };

      case "decrease":
        return { counter: state.counter - 1 };

      case "input":
        return { counter: action.payload};  

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {state.counter}</h1>
      <button
        onClick={() => dispatch({ type: "increase" })}
      >
        Increase
      </button>
      <button
        onClick={() => dispatch({ type: "decrease" })}
      >
        Decrease
      </button>
      <br />
      <input
        value={state.counter}
        onChange={(e) =>
          dispatch(
            { type: 'input', payload: Number(e.target.value) }
          )
        }
        type="number"
      />
    </div>
  );
};

export default App;
