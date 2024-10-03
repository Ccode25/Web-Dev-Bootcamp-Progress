import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// Wrap the app in StrictMode
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://w00gz.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
