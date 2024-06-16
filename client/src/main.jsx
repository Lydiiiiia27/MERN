import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode is a tool for highlighting potential problems in an application. will have more logs in the console!
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
