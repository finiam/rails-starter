// Polyfills should be imported before EVERYTHING
import "root/shared/polyfills";
import React from "react";
import ReactDOM from "react-dom";

import App from "root/components/App";

import "./styles/reset.css";

window.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
