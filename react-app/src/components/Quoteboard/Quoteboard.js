import React, { Component } from "react";
import "./Quoteboard.css";
import Category from "./Category";
import { Container, Row, Col, Tab, ListGroup } from "react-bootstrap";

class Quoteboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: "",
      isLoggedIn: false
    };
  }

  componentDidMount() {}

  handleOnClick = id => {
    console.log(`You click ${id}`);
    //set the state of QuoteBoard so that it gets re-rendered with the updated data
    // if I select "Laziness" this would gather the data and setState with new Quotes
    // once that gets updated your component will be rerendered by reacts lifecycle hooks
  };
  render() {
    return (
      <div className="quoteboardBody">
        <Container fluid={true}>
          <Tab.Container
            id="list-group-tabs-example"
            defaultActiveKey="#categoryHome"
          >
            <Row>
              <Category onClick={this.handleOnClick} />
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
