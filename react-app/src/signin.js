import React, { Component } from "react";
import Footer from "./Footer";
import logo from "./icons/logo.png";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      userValid: false,
      formValid: false,
      error: { name: "", password: ""}
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
        usrValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        errors.user = usrValid ? "" : " is invalid";
        break;
      default:
        break;
    }
    this.setState(
      {
        error: errors,
        userValid: usrValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.userValid
    });
  }

  render() {
    return (
      <React.Fragment>
        <div class="container">
        <div class="py-1 text-center">
             <img class="d-block mx-auto mb-4" src={logo} alt="" width="72" height="72" /> 
            <h2>"mindSpark"</h2>
            <p class="lead">“mindSpark” is an app that encourages people through 
            quotes and messages. It helps people who are having tough time with 
            emotional problem. It also lets you share your own quotes
            to help community build curated ideas.</p>
        </div>
        </div>
         <div class="container">
            <div class= "row">
         <div class="col-6">
             <h3>Sign In</h3>
        <form name="signIn" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="userNameOrEmail">Username or Email</label>
            <input
              onChange={this.handleUserInput.bind(this)}
              name="username"
              className="form-control"
              type="text"
              value={this.state.username}
              placeholder="Enter Your Username or Email"
            />
            <br />
            <label for="password">Password</label>
            <input
              onChange={this.handleUserInput.bind(this)}
              name="password"
              className="form-control"
              type="password"
              value={this.state.password}
              placeholder="Enter Your Password"
            />
            <br />
            <button type="signin" class="btn btn-primary">Sign In</button>
            <hr/>
            <button type="signup" class="btn btn-secondary btn-sm">Sign Up</button>
            <button type="button" class="btn btn-link btn-sm">Forgot Your Password?</button>
          </div>
        </form>
        </div>
        <div class="col-6">[IMAGE]</div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignIn;
