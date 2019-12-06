import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";

import App from "root/components/App";

import "./styles/reset.css";

const HottestApp = hot(App);

window.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<HottestApp />, document.getElementById("root"));
});
