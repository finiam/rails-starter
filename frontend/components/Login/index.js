import React from "react";

import useForm from "root/hooks/useForm";
import { useAuth } from "root/hooks/useAuth";

import styles from "./index.css";

export default function Login() {
  const { formValues, handleChange } = useForm();
  const { handleLogin } = useAuth();

  async function handleSubmit(event) {
    const { email, password } = formValues;

    event.preventDefault();

    handleLogin(email, password);
  }

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Emails
          <input id="email" name="email" type="text" onChange={handleChange} />
        </label>

        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
