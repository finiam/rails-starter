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
    <React.StrictMode>
      <AuthProvider>
        <InnerApp />
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
