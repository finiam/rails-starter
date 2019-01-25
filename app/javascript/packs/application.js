import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import App from "root/components/App";

const HotApp = hot(module)(App);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<HotApp />, document.getElementById("app"));
});
