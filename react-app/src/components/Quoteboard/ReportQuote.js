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
      formValid: false,
      status: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  reportIncrement() {
    // console.log(e);
    $.ajax({
      url: "/db/reportIncrement",
      method: "POST",
      data: {
        quoteId: this.props.quoteId
      }
    })
      .then(msg => {
        alert(msg);
      })
      .fail(err => {
        alert(err.responseText);
      });
  }

  handleReportSubmit(e) {
    // console.log(e);
    e.preventDefault();
    $.ajax({
      url: "/db/submitReport",
      method: "POST",
      data: {
        username: this.props.username,
        quoteId: this.props.quoteId,
        description: this.state.report
      }
    })
      .then(msg => {
        alert(msg);
        this.reportIncrement(this.props.quoteId);
      })
      .fail(err => {
        alert(err.responseText);
      });
  }

  checkReport() {
    console.log("checkReport Called");
    $.ajax({
      url: "/db/checkReport/" + this.props.username + "/" + this.props.quoteId,
      method: "GET"
    }).then(data => {
      this.setState({
        status: data
      });
      console.log(data);
    });
  }

  componentDidMount() {
    this.checkReport();
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
    // console.log(this.state.status);
    if (!this.state.status) {
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
              <form onSubmit={this.handleReportSubmit.bind(this)}>
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
    } else if (this.state.status) {
      return (
        <div class="alert alert-dark" role="alert">
          Quote Reported!
        </div>
      );
    }
  }
}

export default ReportQuote;
