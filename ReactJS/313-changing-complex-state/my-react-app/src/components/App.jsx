import React, { useState } from "react";

function App() {
  const [fullName, setfullName] = useState({
    fName: "",
    lName: "",
  });
  const [inputValue, setInputValue] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setFullName((prevValue) => ({
      ...prevValue,
      [name]: value,

      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prevValue.lName,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: value,
      //   };
      // }
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setInputValue(fullName);
  }
  return (
    <div className="container">
      <h1>
        Hello {inputValue.fName} {inputValue.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
