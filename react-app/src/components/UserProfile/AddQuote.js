import React, {Component} from "react";
import $ from "jquery";
import Button from "react-bootstrap/Button";

const quoteRegex = RegExp(/^[a-z]{0,10}$/);

class AddQuote extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            quote: "",
            quoteValid: false,
            error: {
                quote: ""
            }
        }
    };

    handleSubmit(e)
    {
        e.preventDefault();
        $.ajax({
            url: "/db/quote",
            method: "POST",
            data: {
                quote: this.state.quote
      }
    })
      .then(msg => {
        alert(msg);
    
      })
      .fail(err => {
        alert(err.responseText);
      });  
    }

    handleUserInput(e)
    {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({quote: e.target.value}, () => {
            this.validateField(name, value);
        });
    }

validateField(fieldName, value) {
    let errors = this.state.error;
    let quoteValid = this.state.quoteValid;

    switch (fieldName) {
      case "quote":
        quoteValid = quoteRegex.test(value);
        errors.quote = quoteValid ? "" : " has a limit of 10 characters.";
        break;
      default:
        break;
    }
    this.setState(
        {
          error: errors,
          quoteValid: quoteValid,
        },
        this.validateForm
      );
}

validateForm() {
    this.setState({
      formValid:
        this.state.quoteValid
    });
  }

    render() {
        return (
            <div className="upload">
            <form onSubmit={this.handleSubmit.bind(this)}>

                <textarea
                className={`form-control ${
                    this.state.error.quote ? "invalid" : ""
                  }`}
                onChange={this.handleUserInput.bind(this)}
                name="quote"
                placeholder = "Enter Quote"
                value = {this.state.quote}
                />
                <div className="invalid-name">
                    {this.state.error.quote}
                  </div>
       
            <button 
                className="submit"
                type="submit">Submit
            </button>   
            </form> 
            </div>
         );
    }
}

export default AddQuote;