import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Login from "root/components/Login";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Login />, document.getElementById("app"));
});
