import React, { Component } from "react";
import "./QuoteBox.css";
import {
  Container,
  Col,
  Row,
  Modal,
  Accordion,
  Card,
  Button
} from "react-bootstrap";
import ReportQuote from "./ReportQuote";
import $ from "jquery";
import ShowComment from "./Comment/ShowComment";
import Comment from "./Comment/Comment";
import StarRatings from "react-star-ratings";
import QuoteRating from "../UserProfile/Rating/QuoteRating";

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      needToReload: false
    };

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
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    // console.log("Change", this.props.quoteId);
    return (
      <React.Fragment>
        <Container className="quoteboxContainer">
          <div className="quoteBoxBg">
            <div className="quoteBox">
              <Row className="justify-content-end">
                <button
                  className="btn btn-primary btn-sm quoteboxratebtn"
                  type="submit"
                  onClick={this.handleShow}
                >
                  Rate
                </button>
                <ReportQuote
                  username={this.props.username}
                  quoteId={this.props.quoteId}
                />
              </Row>
              <Row>
                <h3 className="quoteBoxQuoteH3">{this.props.quote}</h3>
              </Row>
              <Row className="quoteBoxAuthorStar justify-content-end">
                <span className="quoteboxAuthor">{this.props.author}</span>

                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>How do you feel about this quote?</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="d-flex justify-content-center">
                      <QuoteRating
                        quoteId={this.props.quoteId}
                        handleClose={this.handleClose}
                      />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-primary" type="submit">
                        Submit
                      </button>
                    </div>
                    {/* <button variant="secondary" onClick={this.handleClose}>
                      Close
                    </button> */}
                  </Modal.Footer>
                </Modal>

                <span>
                  <StarRatings
                    rating={this.props.rating}
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="0px"
                    name="rating"
                    starRatedColor="rgb(255, 255, 255)"
                    starEmptyColor="rgb(47,79,79)"
                  />
                </span>
              </Row>
              <Row className="justify-content-end">
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={this.props.quoteId}
                      >
                        Comment
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={this.props.quoteId}>
                      <Card.Body>
                        <Comment
                          quoteId={this.props.quoteId}
                          refresh={this.toggleRefresh.bind(this)}
                        />
                        <ShowComment
                          author={this.props.author}
                          username={this.props.username}
                          quoteId={this.props.quoteId}
                          needToReload={this.state.needToReload}
                          toggleRefresh={this.toggleRefresh.bind(this)}
                        />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                {/* <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Comment
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Comment
                          quoteId={this.props.quoteId}
                          refresh={this.refresh.bind(this)}
                        />
                        <ShowComment
                          author={this.props.author}
                          quoteId={this.props.quoteId}
                          needToReload={this.state.needToReload}
                          toggleRefresh={this.toggleRefresh.bind(this)}
                        />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion> */}
              </Row>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default QuoteBox;
