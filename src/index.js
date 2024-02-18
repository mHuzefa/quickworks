import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/styles/root.css";
import ThemeContext from "./context/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
