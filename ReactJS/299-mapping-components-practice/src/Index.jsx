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


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
