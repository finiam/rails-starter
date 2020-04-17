import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { login, logout, getSession } from "root/api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [fetchingInitialUser, setFetchingInitialUser] = useState(true);

  useEffect(() => {
    fetchInitialUser();
  }, []);

  async function fetchInitialUser() {
    try {
      const response = await getSession();

      setUser(response.data);
    } catch (error) {
      // if 404, just ignore and reset the session
      if (error.status === 404) {
        setUser(null);

        return;
      }

      throw error;
    } finally {
      setFetchingInitialUser(false);
    }
  }

  async function handleLogin(email, password) {
    const response = await login(email, password);

    setUser(response.data);
  }

  async function handleLogout() {
    await logout();

    setUser(null);
  }

  // While fetching the initial user, do not render anything
  // On a real app, show a loading spinner or equivalent
  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {fetchingInitialUser ? null : children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

AuthProvider.defaultProps = {
  children: null,
};

export const useAuth = () => useContext(AuthContext);
