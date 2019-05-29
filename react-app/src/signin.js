import React, { Component } from "react";
import Footer from "./Footer";
import logo from "./icons/logo.png";
import "./signin.css";
import NavBarPure from "./NavbarPure";
import notFoundImage from "./image/404.jpg";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      userValid: false,
      formValid: false,
      error: { name: "", password: "" }
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
    let usrValid = this.state.userValid;

    switch (fieldName) {
      case "user":
        usrValid = value.match();
        errors.user = usrValid ? "" : " is invalid";
        break;
      default:
        break;
    }
    this.setState(
      {
        error: errors,
        userValid: usrValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.userValid
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBarPure />

        {/* background image start*/}
        <div
          className="bg"
          style={{ backgroundImage: "url(" + notFoundImage + ")" }}
        />
        {/* background image end*/}
        <div class="container">
          <div class="py-1 text-center mkTempName1">
            <img
              class="d-block mx-auto mb-4"
              src={logo}
              alt=""
              width="100"
              height="100"
            />
            <h1>"mindSpark"</h1>
            <p class="lead">
              MindSpark is a web application that let’s users share quotes that
              inspirit one another.
              {/* “mindSpark” is an app that encourages people through quotes and
              messages. It helps people who are having tough time with emotional
              problem. It also lets you share your own quotes to help community
              build curated ideas. */}
            </p>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col" />
            <div class="col form-wrapper">
              <div className="form-group">
                <div class="text-center">
                  <h3>Sign In</h3>
                </div>
                <form name="signIn" onSubmit={this.handleSubmit}>
                  <h6>Username or Email</h6>
                  <input
                    onChange={this.handleUserInput.bind(this)}
                    name="username"
                    className="form-control"
                    type="text"
                    value={this.state.username}
                    placeholder="Enter Your Username or Email"
                  />
                  <br />
                  <br />
                  <h6>Password</h6>
                  <input
                    onChange={this.handleUserInput.bind(this)}
                    name="password"
                    className="form-control"
                    type="password"
                    value={this.state.password}
                    placeholder="Enter Your Password"
                  />
                  <br />
                  <br />
                  <button type="signin" class="btn btn-primary">
                    Sign In
                  </button>
                </form>
              </div>
              <a href="/signup">
                <button type="button" class="btn btn-secondary btn-sm">
                  Sign Up
                </button>
              </a>
              <button type="button" class="btn btn-link btn-sm">
                Forgot Your Password?
              </button>
            </div>
            <div class="col" />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default SignIn;
