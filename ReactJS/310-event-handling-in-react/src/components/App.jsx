import React, { useState } from "react";

function App() {
  const [color, setColor] = useState(true);

  function changeColor() {
    setColor(false);
  }

  function resetColor() {
    setColor(true);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: color ? "red" : "black" }}
        onMouseOver={changeColor}
        onMouseOut={resetColor}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
