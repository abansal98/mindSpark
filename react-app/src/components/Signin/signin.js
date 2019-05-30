import React, { Component } from "react";
import Footer from "../Footer/Footer";
import logo from "../../icons/logo.png";
import "./signin.css";
import NavBarSignin from "../Navbar/NavbarSignin";
import { Button } from "react-bootstrap";

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
      <div className="signinBody">
        <NavBarSignin />

        <div className="container">
          <div className="py-1 text-center ">
            <img
              className="d-block mx-auto mb-4 mkTempName1"
              src={logo}
              alt=""
              width="100"
              height="100"
            />
            <h1>"mindSpark"</h1>
            <p className="lead">
              MindSpark is a web application that let’s users share quotes that
              inspirit one another.
              {/* “mindSpark” is an app that encourages people through quotes and
              messages. It helps people who are having tough time with emotional
              problem. It also lets you share your own quotes to help community
              build curated ideas. */}
            </p>
          </div>
        </div>
        <div className="container">
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
                  <Button type="signin" class="btn btn-primary" block>
                    Sign In
                  </Button>
                  <Button
                    variant="primary"
                    type="button"
                    class="btn btn-secondary btn-sm"
                    href="/signup"
                    block
                  >
                    Sign Up
                  </Button>
                </form>
              </div>

              <button type="button" class="btn btn-link btn-sm">
                Forgot Your Password?
              </button>
            </div>
            <div class="col" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignIn;
