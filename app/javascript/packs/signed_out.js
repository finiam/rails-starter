import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import Login from "root/components/Login";

const HotLogin = hot(module)(Login);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<HotLogin />, document.getElementById("app"));
});
