import React, { Component } from "react";
import "./Quoteboard.css";
import Quotelist from "./Quotelist";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Category from "./Category";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, Row, Col, Tab, ListGroup } from "react-bootstrap";
import QuoteBox from "./QuoteBox";
import Quoteboardguide from "../Quoteboard/Quoteboardguide";

const categories = [
  "Depressed",
  "Weariness",
  "Laziness",
  "Loneliness",
  "Stress",
  "Nervousness",
  "Nostalgia",
  "Grief"
];

const quotes = [
  "I have not failed, I've just found 10,000 ways that won't work",
  "The best way to predict future is to create it",
  "Creativity is just connecting things",
  "Let's go invent tomorrow instead of worrying about what happened yesterday",
  "I could either watch it happen or be a part of it",
  "Go big or Go home",
  "Formal education will make you a living, Self-education will make you a fortune",
  "Be fearful when others are greedy and greedy when others are fearful",
  "Risk comes from not knowing what you're doing",
  "If you can't do great things, do small things in a great way"
];
const authors = [
  "Thomas A. Edison",
  "Peter Ducker",
  "Steve Jobs",
  "Elon Musk",
  "Eliza Dushku",
  "Jim Rohn",
  "Warren Buffett",
  "Napoleon Hill"
];
const ratings = ["★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"];

class Quoteboard extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    var temp = <Category />;
    console.log("Category starts here!");
    console.log(<Category />);
    // console.log(temp);
  }

  render() {
    return (
      <div className="quoteboardBody">
        <Container fluid={true}>
          <Row>
            <NavBar />
          </Row>
          <Tab.Container
            id="list-group-tabs-example"
            defaultActiveKey="#categoryHome"
          >
            <Row>
              <Col md={2} className="quoteboardleftside pt-5">
                <Category />
              </Col>
              <Col md={10} className="quoteboardrightside pt-5">
                {/* <Quotelist /> */}
                <Tab.Content>
                  <Tab.Pane eventKey="#categoryHome">
                    <Quoteboardguide />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#category0">
                    <Quotelist category={"Stress"} />
                    <QuoteBox
                      quote={quotes[0]}
                      author={authors[0]}
                      rating={ratings[2]}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}

class LeftBlurBg extends Component {
  render() {
    return <div className="leftBlurBgBody" />;
  }
}
class RightBlurBg extends Component {
  render() {
    return <div className="rightBlurBgBody" />;
  }
}

export default Quoteboard;
