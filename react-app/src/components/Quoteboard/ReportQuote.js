import React, { Component } from "react";
import "./Quoteboard.css";
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ReportQuote.css";

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
      status: false,
      quoteId: "",
      needToReload: false,
      didLoad: false
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
    //  console.log("HandleReportSbmited");
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
        this.toggleRefresh();
      })
      .fail(err => {
        alert(err.responseText);
        this.toggleRefresh();
      });
  }

  checkReport() {
  // console.log("checkReport Called");
    $.ajax({
      url: "/db/checkReport/" + this.props.username + "/" + this.props.quoteId,
      method: "GET"
    }).then(data => {
      this.setState({
        status: data,
        quoteId: this.props.quoteId,
        didLoad: true
      });
      // console.log(data);
    });
  }

  toggleRefresh() {
    this.setState({
      needToReload: !this.state.needToReload
    });
  }

  componentDidMount() {
    this.checkReport();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.quoteId != this.props.quoteId) {
      this.checkReport();
    }
    if (this.state.needToReload == true) {
      this.checkReport();
      this.toggleRefresh();
    }
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
    if (!this.state.status) {
      return (
        <React.Fragment>
          {this.state.didLoad && (
            <div>
              {/* <br /> */}
              <button
                className="btn btn-danger btn-sm"
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
                    <div className="createAccount submitreportbutton">
                    <button
                      disabled={!this.state.formValid}
                      type="submit"
                      className="btn btn-danger btn-sm"
                      onClick={this.handleClose}
                    >
                      Submit Report
                    </button>
                  </div>
                  </form>
                </Modal.Body>
                {/* <Modal.Footer> */}

                {/* </Modal.Footer> */}
              </Modal>
            </div>
          )}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {this.state.didLoad && (
            <div class="alert alert-dark" role="alert">
              Quote Reported!
            </div>
          )}
        </React.Fragment>
      );
    }
  }
}

export default ReportQuote;
