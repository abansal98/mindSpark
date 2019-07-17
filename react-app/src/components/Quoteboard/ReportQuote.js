import React, { Component } from "react";
import "./Quoteboard.css";
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const reportRegex = RegExp(
  /^[a-zA-Z0-9_#,!?_.][a-zA-Z0-9#,!?_._ ]*[a-zA-Z0-9#,!?_._]$/
);

class ReportQuote extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      report: "",
      reportValid: false,
      error: {
        report: ""
      },
      formValid: false
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

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let errors = this.state.error;
    let reportValid = this.state.reportValid;

    switch (fieldName) {
      case "report":
        reportValid = reportRegex.test(value);
        errors.report = reportValid ? "" : "No leading/trailing allowed!";
        break;
      default:
        break;
    }
    this.setState(
      {
        error: errors,
        reportValid: reportValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.reportValid
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
          Report
        </button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Report Quote</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <form onSubmit={this.handlePasswordSubmit.bind(this)}> */}
            <form>
              <div className="form-group">
                <div className="report">
                  <textarea
                    className={`form-control ${
                      this.state.error.report ? "invalid" : ""
                    }`}
                    onChange={this.handleUserInput.bind(this)}
                    name="report"
                    placeholder="Enter Description"
                    value={this.state.report}
                    id="report"
                  />
                  <div className="invalid-name text-danger">
                    {this.state.error.report}
                  </div>
                </div>
              </div>
              <div class="createAccount">
                <button
                  disabled={!this.state.formValid}
                  type="submit"
                  className="btn btn-primary btn-sm"
                >
                  Submit Report
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

export default ReportQuote;
