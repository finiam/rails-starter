import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

export default class Text extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <p styleName="root">
        {children}
      </p>
    );
  }
}
