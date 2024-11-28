import React, { useState } from "react";
import Questions from "./components/Questions.";

const App = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    setActiveId(id);
  };
  return (
    <main>
      <Questions toggleQuestion={toggleQuestion} activeId={activeId} />
    </main>
  );
};
export default App;
