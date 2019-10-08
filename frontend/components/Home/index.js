import { hot } from "react-hot-loader/root";
import React, { lazy, Suspense } from "react";

import { useAuth } from "root/hooks/useAuth";

import styles from "./index.css";

const Text = lazy(() => import("root/components/Text"));

function Home() {
  const { user, handleLogout } = useAuth();

  return (
    <Suspense fallback={<div />}>
      <div className={styles.root}>
        <Text>Wow, an Async Component</Text>

        {user ? <Text>Hello {user.name}!</Text> : null}

        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </Suspense>
  );
}

export default hot(Home);
