import React, { Component } from "react";
import "./QuoteBox.css";
import { Container, Row } from "react-bootstrap";
import ReportQuote from "./ReportQuote";
import $ from "jquery";

class QuoteBox extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="quoteboxContainer">
          <div className="quoteBoxBg">
            <div className="quoteBox">
              <Row className="justify-content-end">
                <ReportQuote
                  username={this.props.username}
                  quoteId={this.props.quoteId}
                />
              </Row>
              <Row>
                <h3 className="quoteBoxQuoteH3">{this.props.quote}</h3>
              </Row>
              <Row className="quoteBoxAuthorStar justify-content-end">
                <span>{this.props.author}</span>
                <span>&nbsp;</span>
                <span>{this.props.rating} </span>
              </Row>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default QuoteBox;
