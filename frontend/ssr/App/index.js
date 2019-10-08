import { hot } from "react-hot-loader/root";
import React from "react";
import PropTypes from "prop-types";

import setupCsrf from "root/api/setupCsrf";
import { AuthProvider, useAuth } from "root/hooks/useAuth";
import Home from "root/components/Home";
import Login from "root/components/Login";

setupCsrf();

function InnerApp() {
  const { user } = useAuth();

  if (user) return <Home />;

  return <Login />;
}

function App({ initialUser }) {
  return (
    <AuthProvider initialUser={initialUser}>
      <InnerApp />
    </AuthProvider>
  );
}

App.propTypes = {
  initialUser: PropTypes.shape({})
};

App.defaultProps = {
  initialUser: null
};

export default hot(App);
