import React, { useEffect } from "react";

import setupCsrf from "root/api/setupCsrf";
import { AuthProvider, useAuth } from "root/hooks/useAuth";
import Home from "root/components/Home";
import Login from "root/components/Login";

function InnerApp() {
  const { user } = useAuth();

  if (user) return <Home />;

  return <Login />;
}

function App() {
  useEffect(() => {
    setupCsrf();
  }, []);

  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}

export default App;
