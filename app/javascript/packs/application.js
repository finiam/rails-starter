import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import App from "root/components/App";

require("turbolinks").start();

const HotApp = hot(module)(App);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<HotApp />, document.getElementById("app"));
});
