// Step 1 - Import the react and react dom libraries
import React from "react";
import ReactDOM from "react-dom";

// Step 2 - Create a react component -
const App = () =>  {
  return <div> Hi there! </div>;
};

const App2 = function() {
  return <div> Hi there! </div>;
}

// Step - 3 Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root') // using css selector to reference the html element - could also use getElementByID as well I guess
);
