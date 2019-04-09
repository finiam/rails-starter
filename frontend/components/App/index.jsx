import React, { Component, lazy, Suspense } from "react";
import { logout } from "root/api/auth";

const Text = lazy(() => import("root/components/Text"));

export default class App extends Component {
  handleLogoutClick = () => {
    logout();
  };

  render() {
    return (
      <Suspense fallback={<div />}>
        <Text>Wow, an Async Component</Text>

        <button type="button" onClick={this.handleLogoutClick}>
          Logout
        </button>
      </Suspense>
    );
  }
}
