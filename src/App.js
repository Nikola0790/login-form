import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", pass: "" };
    this.handleName = this.handleName.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleName(event) {
    this.setState({ value: event.target.value });
  }

  handlePass(event) {
    this.setState({ pass: event.target.value });
  }

  handleLogin(event) {
    alert(`Login: ${this.state.value} Password: ${this.state.pass}`);
    event.preventDefault();
  }

  handleReset(event) {
    this.setState({ value: "", pass: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleLogin} onReset={this.handleReset}>
        <h1>Login</h1>
        <input
          className="namePass"
          type="text"
          value={this.state.value}
          onChange={this.handleName}
          placeholder="username"
        />
        <input
          className="namePass"
          type="text"
          value={this.state.pass}
          onChange={this.handlePass}
          placeholder="password"
        />
        <input className="login" type="submit" value="login" />
        <input className="reset" type="reset" value="reset" />
      </form>
    );
  }
}
