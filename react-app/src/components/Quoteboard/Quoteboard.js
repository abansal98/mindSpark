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
                {/* <Category /> */}
                <ListGroup>
                  <ListGroup.Item action href="#categoryHome">
                    Home
                  </ListGroup.Item>
                  <ListGroup.Item action href="#category0" variant="success">
                    {categories[0]}
                  </ListGroup.Item>
                  <ListGroup.Item action href="#category1" variant="success">
                    {categories[1]}
                  </ListGroup.Item>
                  <ListGroup.Item action href="#category2" variant="success">
                    {categories[2]}
                  </ListGroup.Item>
                  <ListGroup.Item action href="#category3" variant="success">
                    {categories[3]}
                  </ListGroup.Item>
                  <ListGroup.Item action href="#category4" variant="success">
                    {categories[4]}
                  </ListGroup.Item>
                  <ListGroup.Item action href="#category5" variant="success">
                    {categories[5]}
                  </ListGroup.Item>
                  <ListGroup.Item action href="#category6" variant="success">
                    {categories[6]}
                  </ListGroup.Item>
                  <ListGroup.Item action href="#category7" variant="success">
                    {categories[7]}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={10} className="quoteboardrightside pt-5">
                {/* <Quotelist /> */}
                <Tab.Content>
                  <Tab.Pane eventKey="#categoryHome">
                    <Quoteboardguide />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#category0">
                    <QuoteBox
                      quote={quotes[0]}
                      author={authors[0]}
                      rating={ratings[2]}
                    />
                    <QuoteBox
                      quote={quotes[1]}
                      author={authors[1]}
                      rating={ratings[3]}
                    />
                    <QuoteBox
                      quote={quotes[3]}
                      author={authors[2]}
                      rating={ratings[4]}
                    />
                    <QuoteBox
                      quote={quotes[4]}
                      author={authors[3]}
                      rating={ratings[0]}
                    />
                  </Tab.Pane>

                  <Tab.Pane eventKey="#category1">
                    <QuoteBox
                      quote={quotes[9]}
                      author={authors[4]}
                      rating={ratings[1]}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#category2">
                    <QuoteBox
                      quote={quotes[2]}
                      author={authors[2]}
                      rating={ratings[1]}
                    />
                    <QuoteBox
                      quote={quotes[5]}
                      author={authors[5]}
                      rating={ratings[0]}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#category3">
                    <QuoteBox
                      quote={quotes[0]}
                      author={authors[0]}
                      rating={ratings[2]}
                    />
                    <QuoteBox
                      quote={quotes[9]}
                      author={authors[7]}
                      rating={ratings[0]}
                    />
                    <QuoteBox
                      quote={quotes[3]}
                      author={authors[2]}
                      rating={ratings[4]}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#category4">
                    <QuoteBox
                      quote={quotes[8]}
                      author={authors[6]}
                      rating={ratings[4]}
                    />
                    <QuoteBox
                      quote={quotes[6]}
                      author={authors[5]}
                      rating={ratings[0]}
                    />
                    <QuoteBox
                      quote={quotes[9]}
                      author={authors[7]}
                      rating={ratings[0]}
                    />
                    <QuoteBox
                      quote={quotes[0]}
                      author={authors[0]}
                      rating={ratings[2]}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#category5">
                    <QuoteBox
                      quote={quotes[2]}
                      author={authors[2]}
                      rating={ratings[1]}
                    />
                    <QuoteBox
                      quote={quotes[5]}
                      author={authors[3]}
                      rating={ratings[0]}
                    />
                    <QuoteBox
                      quote={quotes[0]}
                      author={authors[0]}
                      rating={ratings[2]}
                    />
                    <QuoteBox
                      quote={quotes[9]}
                      author={authors[7]}
                      rating={ratings[0]}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#category6">
                    <QuoteBox
                      quote={quotes[9]}
                      author={authors[7]}
                      rating={ratings[0]}
                    />
                    <QuoteBox
                      quote={quotes[7]}
                      author={authors[6]}
                      rating={ratings[0]}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#category7">
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
