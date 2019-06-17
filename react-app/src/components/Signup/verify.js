import React, { Component } from "react";
import $ from "jquery";

class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secretToken: "",
      secretTokenValid: false,
      error: { secretToken: ""},
      formValid: false
    };
  }

  handleSubmit(e) {
      var trimmedsecretToken = this.state.secretToken.trim();
    e.preventDefault();
    $.ajax({
      url: "/db/verify",
      method: "POST",
      data: {
        secretToken: trimmedsecretToken
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

  handleSignIn(e) {}

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
      formValid: this.state.secretTokenValid
    });
  }

  render() {
    return (
      <div className="signinBody">
        <div className="wrapper" ref={this.props.containerRef}>
          <div className="form-wrapper">
            <div className="header">
              <h1 className="mt-2 text-center">Verify Email</h1>
            </div>

            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <div className="secretToken">
                  <label htmlFor="secretToken">Enter Your Token:</label>
                  <input
                    name="secretToken"
                    className="form-control"
                    type="text"
                    placeholder="Enter Your Token"
                    value={this.state.secretToken}
                    onChange={this.handleUserInput.bind(this)}
                  />
                </div>
              </div>

              <div class="verifyToken">
                <button className="btn btn-primary mb-2" type="submit">
                  Verify Your Account
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

export default Verify;
