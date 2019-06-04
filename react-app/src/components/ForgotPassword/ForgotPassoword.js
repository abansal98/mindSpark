import React, { Component } from "react";
import Footer from "../Footer/Footer";
import logo from "../../icons/logo.png";
import { Button } from "react-bootstrap";
// import "../Signup/signup.css";
import "./ForgotPassword.css";
import $ from "jquery";


class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email:"",
            userValid: false,
            formValid: false,
            error: { username: "", email: "" }
        };
    }

  render() {
   return (
      <div className="forgotpasswordBody">
        <div className="wrapper" ref={this.props.containerRef}>
          <div className="form-wrapper">
            <div className="header mt-2">
              <h1>Recover Password</h1>
            </div>

            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <div className="username">
                  <label htmlFor="username">UserName</label>
                  <input
                    onChange={this.handleUserInput.bind(this)}
                    name="username"
                    className="form-control"
                    type="text"
                    value={this.state.username}
                    placeholder="Enter Your Username or Email"
                  />
                </div>
              </div>
              <div class="createAccount">
                <button type="submit" className="btn btn-primary btn-sm">
                  Send Verification Email{" "}
                </button>
              </div>
            </form>
                    <br />
                </div>
            </div>
        );
    }

}

export default ForgotPassword;
