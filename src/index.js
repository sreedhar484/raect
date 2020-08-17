import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Main from "./components/main";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import register from "./components/register";
import Mainhook from "./hooks/mainhook";

ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Main /> */}
    {/* <register /> */}
    <Mainhook />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
