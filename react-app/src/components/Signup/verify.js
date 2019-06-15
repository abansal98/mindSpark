import React, { Component } from "react";
import "./signin.css";
import $ from "jquery";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secretToken: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: "/db/signin",
      method: "POST",
      data: {
        secretToken: this.state.secretToken,
      }
    })
      .then(() => {
        window.location.href = "/";
      })
      .fail(err => {
        alert(err.responseText);
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
                <div className="username">
                  <label htmlFor="username">Secret Token:</label>
                  <input
                    onChange={this.handleUserInput.bind(this)}
                    name="username"
                    className="form-control"
                    type="text"
                    value={this.state.secretToken}
                    placeholder="Enter Your Username"
                  />
                </div>
              </div>

              <div class="createAccount">
                <button className="btn btn-primary mb-2" type="submit">
                  Verify Secret Token
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

export default SignIn;
