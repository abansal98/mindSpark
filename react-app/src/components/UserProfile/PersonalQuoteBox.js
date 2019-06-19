import React, { Component } from "react";
import "./PersonalQuoteBox.css";
import { Container, Row } from "react-bootstrap";

class PersonalQuoteBox extends Component {
  render() {
    return (
      <Container className="personalquoteboxContainer">
        <div className="personalquoteBoxBg">
          <div className="personalquoteBox">
            <Row>
              <h3 className="personalquoteBoxQuoteH3">{this.props.quote}</h3>
            </Row>
            <Row className="personalquoteBoxAuthorStar justify-content-end">
              <span>{this.props.author}</span>
              <span>&nbsp;</span>
              <span>{this.props.rating} </span>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default PersonalQuoteBox;
