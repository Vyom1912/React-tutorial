import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// function MyApp() {
//   return (
//     <>
//       <h1>Custom MyApp</h1>
//     </>
//   );
// }

// synatx is not in react
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click to open google",
// };

// react syntax of jsx
// const anotherReactElement = (
//   <a href="https://google.com" target="_blank">
//     visit google
//   </a>
// );
// //  syntax of react to append child

// const username = "Vyom B Patel";
// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "click me to open google",
//   username
// );
// ReactDOM.createRoot(document.getElementById("root")).render(
//   // <React.StrictMode>
//   <App />
// </React.StrictMode>

// <MyApp />
// MyApp() // it works but not use cause for not good in optimization

// <ReactElement/> syntax wrong cause it is object not function
// ReactElement(); not run cause it is not default function for react. this object made for our program

// anotherReactElement// one of way to use jsx to render

// reactElement // right syntax

//
// );
