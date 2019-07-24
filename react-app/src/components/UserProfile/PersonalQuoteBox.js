import React, { Component } from "react";
import "./PersonalQuoteBox.css";
import { Container, Row, Accordion, Card, Button } from "react-bootstrap";
import StarRatings from 'react-star-ratings';
import QuoteRating from './Rating/QuoteRating';
import Modal from 'react-bootstrap/Modal';
import Comment from '../Quoteboard/Comment/Comment';
import ShowComment from '../Quoteboard/Comment/ShowComment';


class PersonalQuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      needToReload: false
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  toggleRefresh() {
    this.setState({
      needToReload: !this.state.needToReload
    });
  }

  refresh() {
    this.setState({
      needToReload: true
    })
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
                  <QuoteRating quoteId={this.props.quoteId} handleClose={this.handleClose} />
                </Modal.Body>
                <Modal.Footer>
                  <button variant="secondary" onClick={this.handleClose}>
                    Close
            </button>
                </Modal.Footer>
              </Modal>
              <span>{this.props.author}</span>
              <span>&nbsp;</span>
              <StarRatings rating={this.props.rating} numberOfStars={5} name='rating' />

            </Row>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Comment
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Comment quoteId={this.props.quoteId} refresh={this.refresh.bind(this)} />
                    <ShowComment quoteId={this.props.quoteId} />
                  </Card.Body>

                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </Container>
    );
  }
}

export default PersonalQuoteBox;
