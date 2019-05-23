import React, { Component } from "react";
import "./QuoteBox.css";

class QuoteBox extends Component {
  render() {
    return (
      <div className="quoteBox">
        <div>{this.props.quote}</div>
        <div>{this.props.author}</div>
        <div>{this.props.rating}</div>
      </div>
    );
  }
}

export default QuoteBox;
