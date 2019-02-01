import React, { Component, lazy, Suspense } from "react";
import { logout } from "root/api/auth";

const HelloWorld = lazy(() => import("root/components/HelloWorld"));

export default class App extends Component {
  handleLogoutClick = () => {
    logout();
  };

  render() {
    return (
      <Suspense fallback={<div />}>
        <HelloWorld />

        <button type="button" onClick={this.handleLogoutClick}>
          Logout
        </button>
      </Suspense>
    );
  }
}
