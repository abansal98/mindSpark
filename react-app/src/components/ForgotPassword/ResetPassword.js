import React, { Component } from "react";
import "./ForgotPassword.css";
import $ from "jquery";
import Error from "../Error/Error";

const passwordRegex = RegExp(/((?=.*\d)(?=.*[A-Z])(?=.*\W).{6,15})$/);

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmPassword: "",
      passwordValid: false,
      formValid: false,
      trueToken: "false",
      resetPasswordToken: "",
      error: { username: "", email: "" }
    };
  }

  checkToken(e) {
    e = this.props.match.params.token;
    //console.log(e);
    //e.preventDefault();
    $.ajax({
      url: "/db/checkToken",
      method: "POST",
      data: {
        resetPasswordToken: e
      }
    })
      .then(msg => {
        // alert(msg);
        this.state.trueToken = "true";
        console.log(this.state.trueToken + "then");
      })
      .fail(err => {
        this.state.trueToken = "false";
        return <Error />;
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: "/db/updatePassword",
      method: "POST",
      data: {
        password: this.state.password,
        resetPasswordToken: this.state.resetPasswordToken
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
    let passValid = this.state.passwordValid;
    let confirm = this.state.confirm;

    switch (fieldName) {
      case "password":
        passValid = passwordRegex.test(value);
        errors.password = passValid ? (
          ""
        ) : (
          <div className="alert alert-warning">
            Password must have atleast 6 characters, a capital letter, a numeric
            & a special character
          </div>
        );

        confirm = this.state.confirmPassword === this.state.password;
        errors.e_confirm = confirm ? (
          ""
        ) : (
          <div className="error">Passwords do not match</div>
        );

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
        passwordValid: passValid,
        confirm: confirm
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      formValid: this.state.passwordValid && this.state.confirm
    });
  }

  componentDidMount() {
    this.checkToken();
  }

  render() {
    if (this.state.trueToken === "true") {
      return (
        <div className="forgotpasswordBody">
          <div className="wrapper" ref={this.props.containerRef}>
            <div className="form-wrapper">
              <div className="header mt-2">
                <h1>Recover Password</h1>
              </div>

              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <div className="password">
                    <label htmlFor="password">Enter New Password</label>
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
                <div class="createAccount">
                  <button
                    disabled={!this.state.formValid}
                    type="submit"
                    className="btn btn-primary btn-sm"
                  >
                    Change Passoword
                  </button>
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>
      );
    } else {
      return <Error />;
    }
  }
}

export default ResetPassword;
