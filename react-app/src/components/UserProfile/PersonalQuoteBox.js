import React, { Component } from "react";
import "./PersonalQuoteBox.css";
import { Container, Row } from "react-bootstrap";
import StarRatings from 'react-star-ratings';
import QuoteRating from './Rating/QuoteRating';
import Modal from 'react-bootstrap/Modal';

class PersonalQuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <Container className="personalquoteboxContainer">
        <div className="personalquoteBoxBg">
          <div className="personalquoteBox">
            <Row>
              <h3 className="personalquoteBoxQuoteH3">{this.props.quote}</h3>
            </Row>
            <Row className="personalquoteBoxAuthorStar justify-content-end">
            <button className="btn btn-primary" type="submit" onClick={this.handleShow}>Rate</button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>How do you feel about this quote?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <QuoteRating quoteId={this.props.quoteId} />
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={this.handleClose}>
              Close
            </button>
          </Modal.Footer>
          </Modal>
              <span>{this.props.author}</span>
              <span>&nbsp;</span>
              <StarRatings rating={this.props.rating} numberOfStars={5} name='rating'/>
              
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default PersonalQuoteBox;
