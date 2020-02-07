import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import asyncImport from "react-imported-component";

import setupCsrf from "root/api/setupCsrf";
import { AuthProvider, useAuth } from "root/hooks/useAuth";

// Route code splitting, as an example
const Home = asyncImport(() => import("root/components/Home"));
const Login = asyncImport(() => import("root/components/Login"));

function InnerApp() {
  const { user } = useAuth();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {!user && <Route path="/login" component={Login} />}
      </Switch>
    </Router>
  );
}

function App() {
  useEffect(() => {
    setupCsrf();
  }, []);

  return (
    <React.StrictMode>
      <AuthProvider>
        <InnerApp />
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
