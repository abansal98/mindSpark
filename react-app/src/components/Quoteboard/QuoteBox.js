import React, { Component } from "react";
import "./QuoteBox.css";
import { Container, Row, Modal, Accordion, Card, Button } from "react-bootstrap";
import ReportQuote from "./ReportQuote";
import $ from "jquery";
import ShowComment from './Comment/ShowComment';
import Comment from './Comment/Comment';
import StarRatings from 'react-star-ratings';
import QuoteRating from '../UserProfile/Rating/QuoteRating';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      needToReload: false
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
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

              <StarRatings rating={this.props.rating} numberOfStars={5} name='rating'/>
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
                      <Comment quoteId={this.props.quoteId} refresh={this.refresh.bind(this)}/>
                      <ShowComment quoteId={this.props.quoteId} needToReload={this.state.needToReload} />
                    </Card.Body>
                    
                  </Accordion.Collapse>
                </Card>
              </Accordion>

            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default QuoteBox;
