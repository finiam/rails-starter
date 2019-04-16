import React, { Component, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { logout } from "root/api/auth";

import "./index.css";

const Text = lazy(() => import("root/components/Text"));

export default class App extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string.isRequired
    }).isRequired
  };

  handleLogoutClick = () => {
    logout();
  };

  render() {
    const {
      user: { email }
    } = this.props;

    return (
      <Suspense fallback={<div />}>
        <div styleName="root">
          <Text>Wow, an Async Component</Text>

          <Text>Currently logged in as {email}</Text>

          <button type="button" onClick={this.handleLogoutClick}>
            Logout
          </button>
        </div>
      </Suspense>
    );
  }
}
