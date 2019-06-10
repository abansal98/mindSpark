import React, { Component } from "react";
import "./Quoteboard.css";
import Quotelist from "./Quotelist";
import NavBar from "../Navbar/Navbar";
import NavBarSignIn from "../Navbar/NavbarSignin";
import Footer from "../Footer/Footer";
import Category from "./Category";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, Row, Col, Tab, ListGroup } from "react-bootstrap";
import QuoteBox from "./QuoteBox";
import Aboutteam from "../About/Aboutteam";
import $ from "jquery";
import Quoteboardguide from "../Quoteboard/Quoteboardguide";

class Quoteboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: "",
      isLoggedIn: false
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="quoteboardBody">
        <Container fluid={true}>
          <Tab.Container
            id="list-group-tabs-example"
            defaultActiveKey="#categoryHome"
          >
            <Row>
              <Category />
              {/* <Col md={2} className="quoteboardleftside pt-5">
                <Category />
              </Col>
              <Col md={10} className="quoteboardrightside pt-5">
                {/* <Quotelist />
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
              </Col> */}
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
