import React, { Component } from "react";
import "./ForgotPassword.css";
import $ from "jquery";
import Error from "../Error/Error";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailValid: false,
      formValid: false,
      trueToken: false,
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
        alert(msg);
        this.state.trueToken = true;
        console.log(this.state.trueToken + "then");
      })
      .fail(err => {
        this.state.trueToken = false;
        console.log(this.state.trueToken + "fail");
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: "/db/forgotPassword",
      method: "POST",
      data: {
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

    this.setState(
      {
        error: errors
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.email
    });
  }

  componentDidMount() {
    this.checkToken();
  }

  render() {
    if ((this.state.trueToken = true)) {
      return (
        <div className="forgotpasswordBody">
          <div className="wrapper" ref={this.props.containerRef}>
            <div className="form-wrapper">
              <div className="header mt-2">
                <h1>Recover Password</h1>
              </div>

              {/* <form onSubmit={this.handleSubmit.bind(this)}> */}
              <form>
                <div className="form-group">
                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                      name="email"
                      className="form-control"
                      type="text"
                      value={this.state.email}
                      onChange={this.handleUserInput.bind(this)}
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div class="createAccount">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Send Verification Email
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
