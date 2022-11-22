import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import language
import "./language";

// import tailwind
import "./css/tailwind.css";

// import my styles
import "./css/style.css";
import "./scss/main.scss";

// import boxicons
import "boxicons/css/boxicons.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
