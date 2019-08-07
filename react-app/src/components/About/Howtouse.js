import React, { Component } from "react";
import logo from "../../icons/logo.png";

import "./Howtouse.css";
import { Container, Row, Jumbotron } from "react-bootstrap";

class Aboutteam extends Component {
  render() {
    return (
      <Container className="aboutteamBody">
        <Row className="justify-content-center">
          <h1>How to use "mindSpark"?</h1>
        </Row>
        <Row className="justify-content-center">
          <p className="lead text-center">
            You need to signup to enjoy our service
          </p>
        </Row>
        <Row className="text-center">
          <h3 className="text-uppercase">how to signup?</h3>
        </Row>
        <Row className="justify-content-center">
          <p className="lead text-center">
            Click the 'Register' link on our navigation bar at the top of the
            page.
          </p>
          <p className="lead text-center">
            We only requires three things! We need your 'username', 'email', and
            'password'.
          </p>
        </Row>
        <Row className="text-center">
          <h3 className="text-uppercase">Verify your account with one click</h3>
        </Row>
        <Row className="justify-content-center">
          <p className="lead text-center">
            After you signup, you will receive an email with a verification link
            from us. <br />
            Follow the link, then it will verify your account automatically.
          </p>
        </Row>
        <Row className="text-center">
          <h3 className="text-uppercase">Gain access to our main service</h3>
        </Row>
        <Row className="justify-content-center">
          <p className="lead text-center">
            After login, you will see a link to the main service on the
            navigation bar.
          </p>
        </Row>
        <Row className="text-center">
          <h3 className="text-uppercase">Click 'Quotes'</h3>
        </Row>
        <Row className="justify-content-center">
          <p className="lead text-center">
            On the left side, you will see categories of quotes. <br />
            You will see corresponding quotes for each category.
          </p>
        </Row>
        <Row className="justify-content-center">
          <p className="lead text-center">
            Do you feel depressed? <br />
            Click the depreesed and get good quotes for depressed emotions.
          </p>
        </Row>
        <Row className="justify-content-center">
          <p className="lead text-center">
            Do you feel lonely? <br />
            Click the Loneliness and let's see what's in there!
          </p>
        </Row>
      </Container>
    );
  }
}

export default Aboutteam;
