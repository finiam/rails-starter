import { hot } from "react-hot-loader/root";
import React, { Component, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { logout } from "root/api/auth";

import "./index.css";

const Text = lazy(() => import("root/components/Text"));

class App extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  };

  handleLogoutClick = () => {
    logout();
  };

  render() {
    const {
      user: { name }
    } = this.props;

    return (
      <Suspense fallback={<div />}>
        <div styleName="root">
          <Text>Wow, an Async Component</Text>

          <Text>Hello {name}!</Text>

          <button type="button" onClick={this.handleLogoutClick}>
            Logout
          </button>
        </div>
      </Suspense>
    );
  }
}

export default hot(App);
