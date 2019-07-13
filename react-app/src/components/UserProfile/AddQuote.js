import React, { Component } from "react";
import $ from "jquery";
import { Form } from "react-bootstrap";
import "./AddQuote.css";

const quoteRegex = RegExp(
  /^[a-zA-Z0-9_#,!?_.][a-zA-Z0-9#,!?_._ ]*[a-zA-Z0-9#,!?_._]$/
);

class AddQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      quote: "",
      currentDate: new Date(),
      quoteValid: false,
      error: {
        quote: ""
      },
      categories: [],
      selectedCategories: [],
      rating: 0
    };
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

  handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: "/db/addQuote",
      method: "POST",
      data: {
        text: this.state.quote,
        author: this.state.author,
        currentDate:
          this.state.currentDate.getFullYear() +
          "-" +
          (this.state.currentDate.getMonth() + 1) +
          "-" +
          this.state.currentDate.getDate() +
          " " +
          this.state.currentDate.getHours() +
          ":" +
          this.state.currentDate.getMinutes() +
          ":" +
          this.state.currentDate.getSeconds(),
        categories: this.state.selectedCategories,
        rating: this.state.rating
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
    this.setState({ quote: e.target.value }, () => {
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
          : "Quote has a limit of 5 to 750 characters and no leading/trailing allowed!";
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

  validateForm() {
    this.setState({
      formValid: this.state.quoteValid
    });
  }

  componentDidMount() {
    this.setState({
      author: this.props.username
    });
    this.getAllCategories();
  }

  render() {
    return (
      <div className="addquoteBody">
        <h2>AddQuote</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea
            className={`form-control ${
              this.state.error.quote ? "invalid" : ""
            }`}
            className="addquoteTextareaBody"
            onChange={this.handleUserInput.bind(this)}
            name="quote"
            placeholder="Tell us what you think"
            value={this.state.quote}
          />
          <div className="invalid-name text-danger">
            {this.state.error.quote}
          </div>
          <div className="addquoteUserId">
            <h1>by... {this.props.username}</h1>
          </div>

          {/* categories */}
          {/* <h1>Select categories</h1>
          <Form>
            {["checkbox"].map(type => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={this.state.categories}
                  label={`Depressed`}
                />
                <Form.Check
                  type={type}
                  // id={`default-${type}`}
                  label={`Weariness`}
                />
                <Form.Check
                  type={type}
                  // id={`default-${type}`}
                  label={`Laziness`}
                />
                <Form.Check
                  type={type}
                  // id={`default-${type}`}
                  label={`Loneliness`}
                />
                <Form.Check
                  type={type}
                  // id={`default-${type}`}
                  label={`Stress`}
                />
                <Form.Check
                  type={type}
                  // id={`default-${type}`}
                  label={`Nervousness`}
                />
                <Form.Check
                  type={type}
                  // id={`default-${type}`}
                  label={`Nostalgia`}
                />
                <Form.Check
                  type={type}
                  // id={`default-${type}`}
                  label={`Grief`}
                />
                <Form.Check
                  type={type}
                  // id={`default-${type}`}
                  label={`Panic`}
                />
                <Form.Check
                  type={type}
                  // id={`default-${type}`}
                  label={`Others`}
                />
              </div>
            ))}
          </Form> */}
          {/* categories */}

          {/* {console.log("category?")}
          {console.log(this.state.categories[1])}
          {console.log("category!")} */}
          <button
            disabled={!this.state.formValid}
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddQuote;
