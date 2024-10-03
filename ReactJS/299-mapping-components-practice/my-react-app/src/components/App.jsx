import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((e) => (
          <Card key={e.id} emoji={e.emoji} name={e.name} meaning={e.meaning} />
        ))}
      </dl>
    </div>
  );
}

export default App;
