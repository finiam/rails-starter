import React from "react";
import PropTypes from "prop-types";

import styles from "./index.css";

function Text({ children }) {
  return <p className={styles.root}>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.node.isRequired
};

export default Text;
