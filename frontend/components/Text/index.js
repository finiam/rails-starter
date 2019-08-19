import React from "react";
import PropTypes from "prop-types";

import "./index.css";

function Text({ children }) {
  return <p styleName="root">{children}</p>;
}

Text.propTypes = {
  children: PropTypes.node.isRequired
};

export default Text;
