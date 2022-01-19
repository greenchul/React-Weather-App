import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import forecast from "./data/forecast.json";

ReactDOM.render(
  <React.StrictMode>
    <App forecast={forecast} />
  </React.StrictMode>,
  document.getElementById("root")
);
