import React from "react";
import loadable from "@loadable/component";

import { useAuth } from "root/hooks/useAuth";

import styles from "./index.css";

const Text = loadable(() => import("root/components/Text"));

function Home() {
  const { user, handleLogout } = useAuth();

  return (
    <div className={styles.root}>
      <Text>Wow, an Async Component</Text>

      {user ? <Text>Hello {user.name}!</Text> : null}

      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
