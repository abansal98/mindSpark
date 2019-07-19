import React, { Component } from "react";
import "../PersonalQuoteBox.css";
import { Container, Row } from "react-bootstrap";

class ValidationQuoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <Container className="personalquoteboxContainer">
        <div className="personalquoteBoxBg">
          <div className="personalquoteBox">
            <Row>
              <h3 className="personalquoteBoxQuoteH3">{this.props.quote}</h3>
            </Row>
            <Row className="personalquoteBoxAuthorStar justify-content-end" />
          </div>
        </div>
      </Container>
    );
  }
}

export default ValidationQuoteList;
