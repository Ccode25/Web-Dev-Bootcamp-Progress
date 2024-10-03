// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // Note the '/client' import
import App from "./components/App";

// Create a root for your application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your App component within the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
