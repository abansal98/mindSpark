import React, { Component } from "react";
import logo from "../../icons/logo.png";

import "./Aboutteam.css";
import { Container, Row, Jumbotron } from "react-bootstrap";

class Aboutteam extends Component {
  render() {
    return (
      <Container className="aboutteamBody">
        <Row className="justify-content-center mt-3">
          <img
            className="d-block mx-auto mb-4"
            src={logo}
            alt=""
            width="100"
            height="100"
          />
        </Row>
        <Row className="justify-content-center">
          <h1>"mindSpark"</h1>
        </Row>
        <Row className="justify-content-center">
          <p className="lead text-center">
            MindSpark is a web application that lets users share quotes that
            inspirit one another
            {/* “mindSpark” is an app that encourages people through quotes and
              messages. It helps people who are having tough time with emotional
              problem. It also lets you share your own quotes to help community
              build curated ideas. */}
          </p>
        </Row>
        <Row className="text-center">
          <h3 className="text-uppercase">Inspirit yourself</h3>
        </Row>
        <Row>
          <div className="text-center">
            <p>
              Classified quotes will help you to be motivated based on your
              mind-state and mood
            </p>
            <h3 className="text-uppercase">Inspirit others</h3>
            <p>
              Join us and be author! You don’t only receive quotes but you can
              write your own quote, share and help other mindSpark member
            </p>
            <h3 className="text-uppercase">unique experience</h3>
            <p>
              It helps people who are having tough time with emotional problem.
              It also lets you upload your own quotes which can be shared to
              help other people. People will read, rate and suggest quotes You
              are not only listener here, you can be the speaker
            </p>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Aboutteam;
