import React, { useEffect } from "react";
import { Route } from "wouter";
import asyncImport from "react-imported-component";

import setupCsrf from "root/api/setupCsrf";
import { AuthProvider, useAuth } from "root/hooks/useAuth";

// Route code splitting, as an example
const Home = asyncImport(() => import("root/components/Home"));
const Login = asyncImport(() => import("root/components/Login"));

function InnerApp() {
  const { user } = useAuth();

  return (
    <>
      <Route path="/" component={Home} />
      {!user && <Route path="/login" component={Login} />}
    </>
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
