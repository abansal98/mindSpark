import React, { Component } from "react";
import "./QuoteBox.css";

class QuoteBox extends Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default QuoteBox;
