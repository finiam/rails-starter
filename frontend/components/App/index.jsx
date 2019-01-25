import React, { Component } from "react";

import "./index.css";
import { logout } from "../../api/auth";

export default class App extends Component {
  handleLogoutClick = () => {
    logout();
  };

  render() {
    return (
      <div styleName="root">
        <p>Hello World!</p>

        <button type="button" onClick={this.handleLogoutClick}>
          Logout
        </button>
      </div>
    );
  }
}
