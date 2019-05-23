import React, { Component } from "react";
// import { Navbar } from "react-bootstrap";
import Navbar from "./Navbar";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      emailValid: false,
      userValid: false,
      passwordValid: false,
      formValid: false,
      error: { email: "", password: "", username: "" }
    };
  }

  handleSubmit(e) {}

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let errors = this.state.error;
    let emailValid = this.state.emailValid;
    let passValid = this.state.passwordValid;
    let usrValid = this.state.userValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        errors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passValid = value.length > 6;
        errors.password = passValid ? "" : " is too short";
        break;
      case "username":
        usrValid = value.length > 6 && value.length < 50;
        errors.username = usrValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        error: errors,
        userValid: usrValid,
        emailValid: emailValid,
        passwordValid: passValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.userValid &&
        this.state.emailValid &&
        this.state.passwordValid
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <form name="createAccount" onSubmit={this.handleSubmit}>
          <div className="form-control">
            <label for="userName">UserName </label>
            <input
              onChange={this.handleUserInput.bind(this)}
              name="username"
              className="form-control"
              type="text"
              value={this.state.username}
              placeholder="Enter Your UserName"
            />
            <br />
            <label for="email">Email </label>
            <input
              onChange={this.handleUserInput.bind(this)}
              name="email"
              className="form-control"
              type="email"
              value={this.state.email}
              placeholder="Enter Your Email"
            />
            <br />
            <label for="password">Password </label>
            <input
              onChange={this.handleUserInput.bind(this)}
              name="password"
              className="form-control"
              type="password"
              value={this.state.password}
              placeholder="Enter Your Password"
            />
            <br />
            <button disabled={this.state.formValid} className="form-control">
              Sign Up
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SignUp;
