import React, { Component } from "react";
import { login } from "root/api/auth";

export default class Login extends Component {
  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await login(email, password);
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="text"
              onChange={this.handleInputChange}
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={this.handleInputChange}
            />
          </label>

          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}
