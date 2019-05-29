import React, { Component } from "react";
import "./App.css";
import Content from "./Content";
import NavBar from "./Navbar";
import Footer from "./Footer";
import SignUp from "./signup";
import Category from "./Category";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container>
          <Row>
            <Col md={2}>
              <Category />
            </Col>
            <Col md={10}>
              <Content />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
