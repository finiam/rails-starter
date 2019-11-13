import { hot } from "react-hot-loader/root";
import React, { useState } from "react";

import { login } from "root/api/auth";

import styles from "./index.css";

function Login() {
  const [state, setState] = useState({ email: "", password: "" });

  const handleInputChange = event => {
    const {
      target: { name, value }
    } = event;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = state;

    try {
      await login(email, password);
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Emails
          <input
            id="email"
            name="email"
            type="text"
            value={state.email}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default hot(Login);
