// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./components/App";

const root = createRoot(document.getElementById("root")); // Create a root for rendering
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card.
//4. Use the contacts.js file to create card components.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
