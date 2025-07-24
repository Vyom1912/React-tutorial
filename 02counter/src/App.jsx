import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(counter);
    if (counter >= 20) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
      // setCounter((prevcounter) => prevcounter + 1);
      // setCounter((prevcounter) => prevcounter + 1);
      // setCounter((prevcounter) => prevcounter + 1);
      // setCounter(counter + 1); // prevcounter is counter, does not chang any other value using it, but write name both are same just for understanding
    }
    console.log("Clicked", counter);
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  };
  return (
    <>
      <h1>chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value +1 in {counter}</button>
      <br />
      <button onClick={removeValue}>remove value -1 in {counter}</button>
      <p>Counter value is: {counter}</p>
    </>
  );
}

export default App;
