import { hot } from "react-hot-loader/root";
import React, { useEffect } from "react";
import PropTypes from "prop-types";

import setupCsrf from "root/api/setupCsrf";
import { AuthProvider, useAuth } from "root/hooks/useAuth";
import Home from "root/components/Home";
import Login from "root/components/Login";

function InnerApp() {
  const { user } = useAuth();

  if (user) return <Home />;

  return <Login />;
}

function App({ initialUser }) {
  useEffect(() => {
    setupCsrf();
  }, []);

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
