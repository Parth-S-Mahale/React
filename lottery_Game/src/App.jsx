/* eslint-disable no-unused-vars */
import "./App.css";
import Lottery from "./Lottery";
import Ticket from "./Ticket";
import { sum } from "./helper";

function App() {

  let winCondition = (ticket) => {
    return ticket[0] === 0;
  }

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
