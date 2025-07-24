import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className='w-full h-screen duration-200 '
        style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='px-3 flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 rounded-xl font-medium'>
            <button
              onClick={() => {
                setColor("red");
              }}
              className='outline-none px-4 py-1 rounded-md text-white shadow-lg w-fit'
              style={{ background: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className='outline-none px-4 py-1 rounded-md text-white shadow-lg w-fit'
              style={{ background: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className='outline-none px-4 py-1 rounded-md text-white shadow-lg w-fit'
              style={{ background: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("pink");
              }}
              className='outline-none px-4 py-1 rounded-md text-white shadow-lg w-fit'
              style={{ background: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => {
                setColor("yellow");
              }}
              className='outline-none px-4 py-1 rounded-md text-white shadow-lg w-fit'
              style={{ background: "yellow" }}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
