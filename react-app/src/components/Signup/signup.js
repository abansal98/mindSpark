import React, { Button, Component } from "react";
import "./signup.css";
import $ from "jquery";
import gravatar from 'gravatar';

const passwordRegex = RegExp(/((?=.*\d)(?=.*[A-Z])(?=.*\W).{6,15})$/);
const usernameRegex = RegExp(/^[A-Za-z0-9_]{6,24}$/);

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
      active: false,
      secretToken : "",
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
        email: this.state.email,
        active: this.state.active,
        secretToken: this.state.secretToken
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
        errors.email = emailValid ? "" : "Email is invalid";
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
            <div className="alert alert-warning">Password must have atleast 6 characters, a capital letter, a numeric & a special character</div>
          );

        confirm = this.state.confirmPassword === this.state.password;
        errors.e_confirm = confirm ? (
          ""
        ) : (
            <div className="error">Passwords do not match</div>
          );

        break;
      case "username":
        usrValid = usernameRegex.test(value);
        errors.username = usrValid ? (
          ""
        ) : (
            <div className="alert alert-warning">Username must be atleast 6 characters. Only 1 special character, '_' is allowed.</div>
          );
        // usrValid =
        //   value.match("^[A-Za-z0-9_]{6,24}$") &&
        //     errors.username === usrValid ? "" : "Username is too short";
        break;
      case "confirmPassword":
        confirm = this.state.confirmPassword === this.state.password;
        errors.e_confirm = confirm ? (
          ""
        ) : (
            <div className="error">Passwords do not match</div>
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
                    id="signupUserName"
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
                    id="signupPassword"
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
                  <label htmlFor="confirmPassword">Confirm Password</label>
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
                <button disabled={!this.state.formValid} className="btn btn-primary mb-2" type="submit">
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
