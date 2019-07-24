import React, { Component } from "react";
import $ from "jquery";
import {
  Form,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  ButtonToolbar
} from "react-bootstrap";
import "./AddQuote.css";
import UserProfile from "./UserProfile";

const quoteRegex = RegExp(
  /^[a-zA-Z0-9_#'",!?_.][a-zA-Z0-9#'",!?_._ ]*[a-zA-Z0-9#'",!?_._]$/
);

class AddQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      quote: "",
      quoteValid: false,
      error: {
        quote: ""
      },
      categories: [],
      selectedCategories: [],
      rating: 0,
      isSelected: false
    };
    this.clickCatgeory = this.clickCatgeory.bind(this);
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
    let currentDate = new Date();
    $.ajax({
      url: "/db/addQuote",
      method: "POST",
      data: {
        text: this.state.quote,
        author: this.state.author,
        currentDate:
          currentDate.getFullYear() +
          "-" +
          (currentDate.getMonth() + 1) +
          "-" +
          currentDate.getDate() +
          " " +
          currentDate.getHours() +
          ":" +
          currentDate.getMinutes() +
          ":" +
          currentDate.getSeconds(),
        category: this.state.selectedCategories,
        rating: this.state.rating
      }
    })
      .then(msg => {
        alert(msg);
        this.props.toggleRefresh();
      })
      .fail(err => {
        alert(err.responseText);
        this.props.toggleRefresh();
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

  clickCatgeory(e) {
    if (e.target.checked) {
      this.setState(
        {
          selectedCategories: [...this.state.selectedCategories, e.target.value]
        } // ,
        // () => {
        //    console.log(this.state.selectedCategories);
        // }
      );
    } else {
      this.setState(
        {
          selectedCategories: this.state.selectedCategories.filter(function(
            person
          ) {
            return person !== e.target.value;
          })
        }
        // console.log(this.state.selectedCategories)
      );
    }
  }

  render() {
    return (
      <div className="addquoteBody">
        <h1 className="addQuoteTitle mb-5">AddQuote</h1>
        <div>
          <p className="userguide">
            1. Tell us what you think! Share your thought to inspirit other
            people
          </p>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea
            className={`form-control ${
              this.state.error.quote ? "invalid" : ""
            }`}
            className="addquoteTextareaBody mb-5"
            onChange={this.handleUserInput.bind(this)}
            name="quote"
            placeholder={"writing a quote as " + this.props.username}
            value={this.state.quote}
          />

          <div>
            <p className="userguide">
              2. Select corresponding categories for your quote.
            </p>
          </div>

          <ToggleButtonGroup
            className="addquoteCategoryGroup mb-5"
            type="checkbox"
          >
            {this.state.categories.map((value, index) => {
              return (
                <ToggleButton
                  // key={`addquoteCategoryButton-${index}`}
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

          {/* <div>
            <h1>{this.state.mkTempVal}</h1>
          </div> */}

          {/* <ButtonGroup type="checkbox" className="btn-toolbar">
            <ToggleButton variant="outline-primary" value={1}>
              Depressed
            </ToggleButton>
            <ToggleButton variant="outline-primary" value={2}>
              Weariness
            </ToggleButton>
            <ToggleButton variant="outline-primary" value={3}>
              Laziness
            </ToggleButton>
            <ToggleButton variant="outline-primary" value={4}>
              Loneliness
            </ToggleButton>
            <ToggleButton variant="outline-primary" value={5}>
              Stress
            </ToggleButton>
            <ToggleButton variant="outline-primary" value={6}>
              Nervousness
            </ToggleButton>
            <ToggleButton variant="outline-primary" value={7}>
              Nostalgia
            </ToggleButton>
            <ToggleButton variant="outline-primary" value={8}>
              Grief
            </ToggleButton>
            <ToggleButton variant="outline-primary" value={9}>
              Panic
            </ToggleButton>
            <ToggleButton variant="outline-primary" value={10}>
              Others
            </ToggleButton>
          </ButtonGroup> */}

          {/* Depressed Weariness Laziness Loneliness Stress Nervousness Nostalgia Grief Panic Others */}

          <div className="invalid-name text-danger">
            {this.state.error.quote}
          </div>
          {/* <div className="addquoteUserId mb-5">
            <h1>by {this.props.username}</h1>
          </div> */}
          <p className="userguide">
            3. Click 'Submit' button and you are done! Your quote will be public
            after reviewing process. Thank you for participating.
          </p>
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
