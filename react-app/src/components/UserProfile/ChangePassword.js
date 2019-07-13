import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import $ from "jquery";

const passwordRegex = RegExp(/((?=.*\d)(?=.*[A-Z])(?=.*\W).{6,15})$/);

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldpassword: "",
      password: "",
      confirmPassword: "",
      passwordValid: false,
      formValid: false,
      show: false,
      error: { password: "", confirmPassword: "", oldpassword: "" }
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handlePasswordSubmit(e) {
    //console.log(this.state.oldpassword);
    e.preventDefault();
    $.ajax({
      url: "/db/changePassword",
      method: "POST",
      data: {
        oldpassword: this.state.oldpassword,
        password: this.state.password,
        username: this.props.username
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

  render() {
    return (
      <React.Fragment>
        <br />
        <button
          className="btn btn-dark"
          type="submit"
          onClick={this.handleShow}
        >
          Change Password
        </button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handlePasswordSubmit.bind(this)}>
              <div className="form-group">
                <div className="password">
                  <label htmlFor="password">Enter Old Password</label>
                  <input
                    id="oldpassword"
                    onChange={this.handleUserInput.bind(this)}
                    name="oldpassword"
                    className="form-control"
                    type="password"
                    value={this.state.oldpassword}
                    placeholder="Old Password"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="password">
                  <label htmlFor="password">Enter New Password</label>
                  <input
                    id="signupPassword"
                    className={`form-control ${
                      this.state.error.password ? "invalid" : ""
                    }`}
                    placeholder="New Password"
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
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input
                    className={`form-control ${
                      this.state.error.e_confirm ? "invalid" : ""
                    }`}
                    placeholder="Confirm New Password"
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
                  Change Password
                </button>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ChangePassword;
