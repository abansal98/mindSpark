import React, { Component } from "react";
import { ProgressBar, Card, Button, CardDeck } from "react-bootstrap";
import "./Aboutteam.css";

class Aboutcard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="aboutteamBody">
          <h1 className="lastheading1 text-uppercase">
            do you need spark in your mind?
          </h1>
          <h1 className="lastheading2 text-uppercase ">Join us!</h1>

          <CardDeck>
            <Card style={{ width: "15rem" }} bg="success">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
              />
              <Card.Body>
                <Card.Title>Join us!</Card.Title>
                <Card.Text>
                  Join "mindSpark" community as reader and also be an author!
                </Card.Text>
                <Button variant="primary" href="/signup">
                  Sign up
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "15rem" }} bg="dark">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=3155&q=80"
              />
              <Card.Body>
                <Card.Title>Check out our Git Repo</Card.Title>
                <Card.Text>
                  Our project is open source. Check out our git repository.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/mindspark-sict/testServer"
                  target="_blank"
                >
                  Git Repo
                </Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </React.Fragment>
    );
  }
}

export default Aboutcard;
