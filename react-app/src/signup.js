import React, { Component } from "react";
// import { Navbar } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './signup.css'
import {Link} from 'react-router-dom';

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
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="firstName">
                <label for="firstName">First Name</label>
                <input placeholder="First Name"
                        type="text"
                        name="firstName"
                        onChange={this.handleUserInput.bind(this)}
                />
              </div>

              <div className="lastName">
                <label for="lastName">Last Name</label>
                <input placeholder="Last Name"
                        type="text"
                        name="lastName"
                        onChange={this.handleUserInput.bind(this)}
                />
              </div>

              <div className="email">
                <label for="email">Email</label>
                <input placeholder="Email"
                        type="email"
                        name="email"
                        onChange={this.handleUserInput.bind(this)}
                />
              </div>

              <div className="password">
                <label for="password">Password</label>
                <input placeholder="Password"
                        type="password"
                        name="password"
                        onChange={this.handleUserInput.bind(this)}
                />
              </div>

              <div className="createAccount">
                <button className="btn btn-primary" type="submit">Create Account</button>
               
              </div>
            </form>
          </div>
        </div>
        </React.Fragment>
    );
  }
}

export default SignUp;
