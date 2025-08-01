//  way 1 how react do in jsx code t compile
// function customReact(reactElement, container) {
//   const domElement = document.createElement(reactElement.type);
//   domElement.innerHTML = reactElement.children;
//   domElement.setAttribute("href", reactElement.props.href);
//   domElement.setAttribute("target", reactElement.props.target);
//   container.appendChild(domElement);
// }

//  way 2 modification of way 1
function customReact(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click to open google",
};

const mainContainer = document.getElementById("root");

customReact(reactElement, mainContainer);
