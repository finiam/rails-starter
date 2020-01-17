import React, { useState } from "react";
import { useLocation } from "wouter";

import useForm from "root/hooks/useForm";
import { useAuth } from "root/hooks/useAuth";

import styles from "./index.css";

export default function Login() {
  const { formValues, handleChange } = useForm();
  const { handleLogin } = useAuth();
  const [_location, setLocation] = useLocation();
  const [error, setError] = useState(false);

  async function handleSubmit(event) {
    const { email, password } = formValues;

    event.preventDefault();

    try {
      await handleLogin(email, password);

      setLocation("/");
    } catch {
      setError(true);
    }
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

        {error && <p>User password combination not found</p>}

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
