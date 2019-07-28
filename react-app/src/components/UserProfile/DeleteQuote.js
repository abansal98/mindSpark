import React, { Component } from "react";
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class DeleteQuote extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      quoteId: ""
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleReportSubmit(e) {
    //  console.log("HandleReportSbmited");
    e.preventDefault();
    $.ajax({
      url: "/db/deletePersonalQuote",
      method: "POST",
      data: {
        quoteId: this.props.quoteId
      }
    });
    this.props.deleteRefresh();
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <button
            className="btn btn-danger btn-sm"
            type="submit"
            onClick={this.handleShow}
          >
            Delete
          </button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Cofirm Delete?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.handleReportSubmit.bind(this)}>
                <div className="createAccount submitreportbutton">
                  <button
                    type="submit"
                    className="btn btn-danger btn-sm"
                    onClick={this.handleClose}
                  >
                    Delete
                  </button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default DeleteQuote;
