import React, { Component } from "react";
import "./PersonalQuoteBox.css";
import { Container, Row, Accordion, Card, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import Modal from "react-bootstrap/Modal";
import Comment from "../Quoteboard/Comment/Comment";
import ShowComment from "../Quoteboard/Comment/ShowComment";
import DeleteQuote from "./DeleteQuote";
import EditQuote from "./EditQuote";

class PersonalQuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needToReload: false,
      authorCheck: false
    };
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

  authorCheck() {
    if (this.props.newauthor != "") {
      // console.log(this.props.newauthor);
      this.state.authorCheck = true;
      // console.log(this.state.authorCheck);
    }
  }

  componentDidMount() {
    this.authorCheck();
  }

  render() {
    return (
      <React.Fragment>
        <Container className="personalquoteboxContainer">
          <div className="personalquoteBoxBg">
            <div className="personalquoteBox">
              <Row className="justify-content-end">
                <EditQuote
                  quoteId={this.props.quoteId}
                  quote={this.props.quote}
                />
                <DeleteQuote
                  quoteId={this.props.quoteId}
                  deleteRefresh={this.props.deleteRefresh}
                />
              </Row>
              <Row>
                <div className="qbox">
                  <h3 className="quoteBoxQuoteH3">{this.props.quote}</h3>
                </div>
              </Row>
              <Row className="personalquoteBoxAuthorStar justify-content-end">
                {this.state.authorCheck == true && (
                  <span className="quoteboxAuthor">{this.props.newauthor}</span>
                )}
                <span className="quoteboxAuthor">({this.props.author})</span>
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
                <Accordion>
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
                        <ShowComment quoteId={this.props.quoteId} />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Row>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default PersonalQuoteBox;
