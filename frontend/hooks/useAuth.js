import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

import { login, logout } from "root/api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ initialUser, children }) => {
  const [user, setUser] = useState(initialUser);

  async function handleLogin(email, password) {
    const response = await login(email, password);

    setUser(response.data.user);
  }

  async function handleLogout() {
    await logout();

    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  initialUser: PropTypes.shape({}),
  children: PropTypes.node
};

AuthProvider.defaultProps = {
  initialUser: null,
  children: null
};

export const useAuth = () => useContext(AuthContext);
