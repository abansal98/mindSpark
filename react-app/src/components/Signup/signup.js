import React, { Component } from "react";
// import { Navbar } from "react-bootstrap";
import NavbarSignin from "../Navbar/NavbarSignin";
//import Footer from "./Footer";
import "./signup.css";
import { Link } from "react-router-dom";
import $ from "jquery";

const passwordRegex = RegExp(/((?=.*\d)(?=.*[A-Z])(?=.*\W).{6,15})$/);

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      emailValid: false,
      userValid: false,
      passwordValid: false,
      confirm: false,
      formValid: false,
      error: {
        email: "",
        password: "",
        username: "",
        e_confirm: ""
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: "/db/signup",
      method: "POST",
      data: {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      }
    })
      .then(msg => {
        alert(msg);
      })
      .fail(err => {
        alert(err.responseText);
      });
  }

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
    let confirm = this.state.confirm;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        errors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        // contain at least 1 special character
        // password between 6 and 15
        // contain at least 1 capital letter
        // contain at least 1 digit
        passValid = passwordRegex.test(value);
        errors.password = passValid ? (
          ""
        ) : (
            <div className="alert alert-warning">must have 6 password</div>
          );
        break;
      case "username":
        usrValid =
          value.match("^[A-Za-z0-9]*$") &&
          value.length > 6 &&
          value.length < 20;
        errors.username = usrValid ? "" : " is too short";
        break;
      case "confirmPassword":
        confirm = this.state.confirmPassword === this.state.password;
        errors.e_confirm = confirm ? (
          ""
        ) : (
            <div className="error"> not match</div>
          );
        break;
      default:
        break;
    }
    this.setState(
      {
        error: errors,
        userValid: usrValid,
        emailValid: emailValid,
        passwordValid: passValid,
        confirm: confirm
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.userValid &&
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.confirm
    });
  }

  render() {
    return (
      <div className="signupBody">
        <div className="wrapper" ref={this.props.containerRef}>
          <div className="form-wrapper">
            <div className="header">
              <h1 className="mt-2 text-center">Create Account</h1>
            </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div class="form-group">
                <div className="username">
                  <label htmlFor="username">UserName</label>
                  <input
                    className={`form-control ${
                      this.state.error.username ? "invalid" : ""
                    }`}
                    placeholder="UserName"
                    type="text"
                    name="username"
                    onChange={this.handleUserInput.bind(this)}
                  />
                  <div className="invalid-name">
                    {this.state.error.username}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    className={`form-control ${
                      this.state.error.email ? "invalid" : ""
                    }`}
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={this.handleUserInput.bind(this)}
                  />
                  <div className="invalid-email">{this.state.error.email}</div>
                </div>
              </div>

              <div className="form-group">
                <div className="password">
                  <label htmlFor="password">Password</label>
                  <input
                    className={`form-control ${
                      this.state.error.password ? "invalid" : ""
                    }`}
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleUserInput.bind(this)}
                    onBlur={this.validateField.bind(this)}
                  />
                  <div className="invalid-password">
                    {this.state.error.password}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="confirmPassword">
                  <label htmlFor="confirmPassword">Confirm</label>
                  <input
                    className={`form-control ${
                      this.state.error.e_confirm ? "invalid" : ""
                    }`}
                    placeholder="Confirm"
                    type="password"
                    name="confirmPassword"
                    onChange={this.handleUserInput.bind(this)}
                  />
                  <div className="invalid-confirm">
                    {this.state.error.e_confirm}
                  </div>
                </div>
              </div>

              <div className="createAccount">
                <button className="btn btn-primary mb-2" type="submit">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
