import React, { Component } from "react";
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {
  Form,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  ButtonToolbar
} from "react-bootstrap";

const quoteRegex = RegExp(
  /^[a-zA-Z0-9_#'",!?_.][a-zA-Z0-9#'",!?_._ ]*[a-zA-Z0-9#'",!?_._]$/
);

class EditQuote extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      quote: "",
      quoteValid: false,
      error: {
        quote: ""
      },
      categories: [],
      selectedCategories: [],
      isSelected: false,
      isChecked: false,
      quoteid: "",
      categories: []
    };
    this.clickCatgeory = this.clickCatgeory.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: "/db/editQuote",
      method: "POST",
      data: {
        quote: this.state.quote,
        // category: this.state.selectedCategories,
        quoteid: this.props.quoteid
      }
    })
      .then(msg => {
        alert(msg);
        this.props.editRefresh();
      })
      .fail(err => {
        alert(err);
        this.props.editRefresh();
      });
    this.props.editRefresh();
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  getAllCategories() {
    $.ajax({
      url: "/db/getCategories",
      method: "GET"
    }).then(data => {
      this.setState({
        categories: data
      });
    });
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ quote: e.target.value });
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let errors = this.state.error;
    let quoteValid = this.state.quoteValid;

    switch (fieldName) {
      case "quote":
        quoteValid =
          quoteRegex.test(value) &&
          this.state.quote.length > 5 &&
          this.state.quote.length < 500;
        errors.quote = quoteValid
          ? ""
          : "Quote has a limit of 5 to 500 characters and no leading/trailing allowed!";
        break;
      default:
        break;
    }
    this.setState(
      {
        error: errors,
        quoteValid: quoteValid
      },
      this.validateForm
    );
  }

  clickCatgeory(e) {
    if (e.target.checked) {
      this.setState({
        selectedCategories: [...this.state.selectedCategories, e.target.value]
      });
    } else {
      this.setState({
        selectedCategories: this.state.selectedCategories.filter(function(
          person
        ) {
          return person !== e.target.value;
        })
      });
    }
  }

  validateForm() {
    this.setState({
      formValid: this.state.quoteValid
    });
  }

  componentDidMount() {
    this.setState({
      quote: this.props.quote
    });
    this.getAllCategories();
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
            Edit
          </button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Quote</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <div className="report">
                    <textarea
                      className={`form-control ${
                        this.state.error.quote ? "invalid" : ""
                      }`}
                      onChange={this.handleUserInput.bind(this)}
                      name="quote"
                      placeholder="Edit Quote"
                      value={this.state.quote}
                      id="quote"
                    />
                    <div className="invalid-name text-danger">
                      {this.state.error.quote}
                    </div>
                  </div>
                </div>
                {/* <div className="form-group">
                  <ToggleButtonGroup
                    className="addquoteCategoryGroup mb-5"
                    type="checkbox"
                  >
                    {this.state.categories.map((value, index) => {
                      return (
                        <ToggleButton
                          variant="outline-primary"
                          value={value.categoryName}
                          size="lg"
                          className="addquoteCategoryButton"
                          checked={this.state.isSelected}
                          onClick={this.clickCatgeory}
                        >
                          {value.categoryName}
                        </ToggleButton>
                      );
                    })}
                  </ToggleButtonGroup>
                </div> */}

                <div className="createAccount submitreportbutton">
                  <button
                    disabled={!this.state.formValid}
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
