import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleText(event) {
    setInputText(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setItems((prevItems) => [...prevItems, inputText]);
    setInputText("");
  }

  function handleDelete(itemToDelete) {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToDelete));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleText} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => handleDelete(item)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
