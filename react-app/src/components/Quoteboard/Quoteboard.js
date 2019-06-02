import React, { Component } from "react";
import "./Quoteboard.css";
import Quotelist from "./Quotelist";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Category from "./Category";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

class Quoteboard extends Component {
  render() {
    return (
      <div className="quoteboardBody">
        <NavBar />
        <Container>
          <Row>
            <Col md={2}>
              <Category />
            </Col>
            <Col md={10}>
              <Quotelist />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Quoteboard;
