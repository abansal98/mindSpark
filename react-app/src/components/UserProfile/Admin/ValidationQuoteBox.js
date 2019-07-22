import React, { Component } from "react";
import "../PersonalQuoteBox.css";
import { Container, Row } from "react-bootstrap";
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const messageRegex = RegExp(
  /^[a-zA-Z0-9_#,!?_.][a-zA-Z0-9#,!?_._ ]*[a-zA-Z0-9#,!?_._]$/
);

class ValidationQuoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      message: "",
      messageValid: false,
      error: {
        message: ""
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

  handleKeepSubmit() {
    $.ajax({
      url: "/db/keepQuote",
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

  handleDeleteSubmit() {
    $.ajax({
      url: "/db/deleteQuote",
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

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let errors = this.state.error;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case "message":
        messageValid = messageRegex.test(value);
        errors.message = messageValid ? "" : "No leading/trailing allowed!";
        break;
      default:
        break;
    }
    this.setState(
      {
        error: errors,
        messageValid: messageValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.messageValid
    });
  }

  render() {
    return (
      <Container className="personalquoteboxContainer">
        <div className="personalquoteBoxBg">
          <div className="personalquoteBox">
            <Row>
              <h3 className="personalquoteBoxQuoteH3">{this.props.quote}</h3>
            </Row>
            <Row>
              <span>{this.props.author}</span>
            </Row>
            <Row className="personalquoteBoxAuthorStar justify-content-end">
              <button
                type="button"
                class="btn btn-success"
                onClick={this.handleKeepSubmit.bind(this)}
              >
                Keep
              </button>
              <button
                type="button"
                class="btn btn-danger"
                onClick={this.handleShow}
              >
                Delete
              </button>
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Delete Quote</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form onSubmit={this.handleDeleteSubmit.bind(this)}>
                    <div className="form-group">
                      <div className="report">
                        <textarea
                          className={`form-control ${
                            this.state.error.report ? "invalid" : ""
                          }`}
                          onChange={this.handleUserInput.bind(this)}
                          name="message"
                          placeholder="Enter Message to send to Author"
                          value={this.state.message}
                          id="message"
                        />
                        <div className="invalid-name text-danger">
                          {this.state.error.message}
                        </div>
                      </div>
                    </div>
                    <div class="createAccount">
                      <button
                        disabled={!this.state.formValid}
                        type="submit"
                        className="btn btn-danger"
                        onClick={this.handleClose}
                      >
                        Send Message and Delete
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
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default ValidationQuoteList;
