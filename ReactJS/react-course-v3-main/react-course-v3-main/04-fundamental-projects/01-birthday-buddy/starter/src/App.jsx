import React, { useState } from "react";
import people from "./data.js";
import List from "./List.jsx";

const App = () => {
  const [peopledata, setEmptyList] = useState(people);

  function handleClear() {
    setEmptyList([]);
  }
  return (
    <main>
      <section className="container">
        <h3>{peopledata.length} Birthdays Today</h3>
        {peopledata.map((person, index) => (
          <div key={index}>
            <List person={{ ...person }} />
          </div>
        ))}
        <div>
          <button className="btn btn-block" onClick={handleClear}>
            Clear all
          </button>
        </div>
      </section>
    </main>
  );
};
export default App;
