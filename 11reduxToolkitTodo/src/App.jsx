// import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Learn about redux Toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
