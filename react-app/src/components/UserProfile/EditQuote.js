import React, { Component } from "react";
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const reportRegex = RegExp(
  /^[a-zA-Z0-9_#,!?_.][a-zA-Z0-9#,!?_._ ]*[a-zA-Z0-9#,!?_._]$/
);

class EditQuote extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
      //   report: "",
      //   reportValid: false,
      //   error: {
      //     report: ""
      //   },
      //   formValid: false,
      //   status: false,
      //   quoteId: "",
      //   needToReload: false,
      //   didLoad: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleReportSubmit(e) {
    //  console.log("HandleReportSbmited");
    e.preventDefault();
    $.ajax({
      url: "/db/editQuote",
      method: "POST",
      data: {
        quoteId: this.props.quoteId,
        quote: this.state.quote
      }
    })
      .then(msg => {
        alert(msg);
        // this.toggleRefresh();
      })
      .fail(err => {
        alert(err.responseText);
        // this.toggleRefresh();
      });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  //   handleUserInput(e) {
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     this.setState({ [name]: value }, () => {
  //       this.validateField(name, value);
  //     });
  //   }

  //   validateField(fieldName, value) {
  //     let errors = this.state.error;
  //     let reportValid = this.state.reportValid;

  //     switch (fieldName) {
  //       case "report":
  //         reportValid = reportRegex.test(value);
  //         errors.report = reportValid ? "" : "No leading/trailing allowed!";
  //         break;
  //       default:
  //         break;
  //     }
  //     this.setState(
  //       {
  //         error: errors,
  //         reportValid: reportValid
  //       },
  //       this.validateForm
  //     );
  //   }

  //   validateForm() {
  //     this.setState({
  //       formValid: this.state.reportValid
  //     });
  //   }

  render() {
    return (
      <React.Fragment>
        <div>
          <button
            className="btn btn-danger btn-sm"
            type="submit"
            onClick={this.handleShow}
          >
            Edit
          </button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Quote</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                {/* <form onSubmit={this.handleReportSubmit.bind(this)}> */}
                <div className="form-group">
                  <div className="report">
                    <textarea
                      //   className={`form-control ${
                      //     this.state.error.report ? "invalid" : ""
                      //   }`}
                      //   onChange={this.handleUserInput.bind(this)}
                      name="quote"
                      placeholder="Enter Description"
                      value={this.props.quote}
                      id="quote"
                    />
                    {/* <div className="invalid-name text-danger">
                      {this.state.error.report}
                    </div> */}
                  </div>
                </div>
                <div className="createAccount submitreportbutton">
                  <button
                    // disabled={!this.state.formValid}
                    type="submit"
                    className="btn btn-danger btn-sm"
                    onClick={this.handleClose}
                  >
                    Update
                  </button>
                </div>
              </form>
            </Modal.Body>
            {/* <Modal.Footer> */}

            {/* </Modal.Footer> */}
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default EditQuote;
