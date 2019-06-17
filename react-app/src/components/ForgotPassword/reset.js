import React, { Component } from "react";
import "./ForgotPassword.css";
import $ from "jquery";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailValid: false,
      formValid: false,
      error: { username: "", email: "" }
    };
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
      error: errors,
    },
    this.validateForm
  );
}

validateForm() {
  this.setState({
    formValid: this.state.email
  });
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
  }
}

export default ResetPassword;
