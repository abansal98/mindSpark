import React, { Component } from "react";
import "../Quoteboard/QuoteBox.css";

class Samplequotebox extends Component {
  render() {
    return (
      <div className="quoteBoxBg">
        <div className="quoteBox">
          <h3 className="quoteBoxQuoteH3">{this.props.quote}</h3>
          <div className="quoteBoxAuthorStar">
            <span>{this.props.author}</span>
            <span> </span>
            {this.props.rating}
          </div>
        </div>
      </div>
    );
  }
}

export default Samplequotebox;
