import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleIsMouseOut() {
    setIsMouseOver(false);
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span
          style={{ backgroundColor: isMouseOver ? "yellow" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleIsMouseOut}
        >
          Add
        </span>
      </button>
    </div>
  );
}

export default InputArea;
