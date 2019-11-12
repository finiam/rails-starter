import { hot } from "react-hot-loader/root";
import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";

import { logout } from "root/api/auth";

import styles from "./index.css";

const Text = loadable(() => import("root/components/Text"));

function App({ user: { name } }) {
  return (
    <div className={styles.root}>
      <Text>Wow, an Async Component</Text>

      <Text>Hello {name}!</Text>

      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

App.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default hot(App);
