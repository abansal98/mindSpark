import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "./Samplequotebox.css";

class Samplequotebox extends Component {
  render() {
    return (
      <Container className="samplequoteboxContainer">
        <div className="samplequoteBoxBg">
          <div className="samplequoteBox">
            <Row>
              <h3>{this.props.quote}</h3>
            </Row>
            <Row className="samplequoteBoxAuthorStar justify-content-end">
              <span>{this.props.author} </span>
              <span>&nbsp;</span>
              <span>{this.props.rating} </span>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default Samplequotebox;
