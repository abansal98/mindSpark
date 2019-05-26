import React, { Component } from "react";
import "./QuoteBox.css";

class QuoteBox extends Component {
  render() {
    return (
      <div className="quoteBox">
        <h2 className="quoteBoxQuoteH2">{this.props.quote}</h2>
        <div className="quoteBoxAuthorStar">
          <span>{this.props.author}</span>
          <span> </span>
          {this.props.rating}
        </div>
      </div>
    );
  }
}

export default QuoteBox;
