import React, { Component } from "react";
import logo from "../../icons/logo.png";
import { ProgressBar, Card, Button, CardDeck } from "react-bootstrap";
import "./Aboutteam.css";
import img1 from "../../image/author_card.jpg";

class Aboutteam extends Component {
  render() {
    return (
      <div className="aboutteamBody">
        <div className="container">
          <div className="py-1 text-center ">
            <img
              className="d-block mx-auto mb-4"
              src={logo}
              alt=""
              width="100"
              height="100"
            />
            <h1>"mindSpark"</h1>
            <p className="lead">
              MindSpark is a web application that let’s users share quotes that
              inspirit one another
              {/* “mindSpark” is an app that encourages people through quotes and
              messages. It helps people who are having tough time with emotional
              problem. It also lets you share your own quotes to help community
              build curated ideas. */}
            </p>
            <h3 className="text-uppercase">Inspirit yourself</h3>
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
              People will read, rate and suggest quotes You are not only
              listener here, you can be the speaker
            </p>
            <h1 className="lastheading text-uppercase">
              do you need spark in your mind?
            </h1>
            <h1 className="text-uppercase">Join us!</h1>
            <CardDeck>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"
                />
                <Card.Body>
                  <Card.Title>Join us!</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=3155&q=80"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutteam;
