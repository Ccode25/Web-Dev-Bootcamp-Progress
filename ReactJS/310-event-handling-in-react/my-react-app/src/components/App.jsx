import React, { useState } from "react";

function App() {
  const [color, setColor] = useState(true);
  const [header, setHeader] = useState("Hello");
  const [inputValue, setInputValue] = useState("");

  function changeColor() {
    setColor(false);
  }

  function resetColor() {
    setColor(true);
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    setHeader(inputValue);
  }

  return (
    <div className="container">
      <h1>{header}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button
        style={{ backgroundColor: color ? "white" : "black" }}
        onMouseOver={changeColor}
        onMouseOut={resetColor}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
