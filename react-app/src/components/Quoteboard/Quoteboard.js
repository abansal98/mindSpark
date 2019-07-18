import React, { Component } from "react";
import "./Quoteboard.css";
import Category from "./Category";
import { Container, Row, Col, Tab, ListGroup } from "react-bootstrap";
import $ from "jquery";
import Quotelist from "./Quotelist";
import Quoteboardguide from "./Quoteboardguide";

class Quoteboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: "",
      category: "",
      categories: [],
      isLoggedIn: false,
      didLoad: false
    };
  }

  getCategories() {
    $.ajax({
      url: "/db/getCategories",
      method: "GET"
    }).then(data => {
      console.log(data);
      this.setState({
        categories: data,
        didLoad: true
      });
    });
  }

  componentDidMount() {
    this.getCategories();
  }

  //set the state of QuoteBoard so that it gets re-rendered with the updated data
  // if I select "Laziness" this would gather the data and setState with new Quotes
  // once that gets updated your component will be rerendered by reacts lifecycle hooks
  handleOnClick = id => {
    this.setState({
      category: id
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.category !== this.state.category) {
  //     this.setState({
  //       didLoad: false
  //     })
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('Component did update!!');
  //   console.log(prevProps);
  //   console.log(prevState);
  // }

  render() {
    return (
      this.state.didLoad && (
        <>
          <div className="quoteboardBody">
            <Container fluid={true}>
              <Tab.Container
                id="list-group-tabs-example"
                defaultActiveKey="#categoryHome"
              >
                <Row>
                  <Col md={2} className="quoteboardleftside">
                    <ListGroup>
                      <ListGroup.Item
                        action
                        href="#categoryHome"
                        variant="success"
                      >
                        Home
                      </ListGroup.Item>
                      {/* </ListGroup> */}
                      {/* temporary for CATEGORY HOME */}
                      {/* <ListGroup> */}
                      {this.state.categories.map((value, index) => {
                        return (
                          <Category
                            categoryName={value.categoryName}
                            categoryID={value.categoryID}
                            onClick={this.handleOnClick.bind(this)}
                          />
                        );
                      })}
                    </ListGroup>
                  </Col>
                  <Col md={10} className="quoteboardrightside">
                    {/* <Quotelist /> */}
                    <Tab.Content>
                      <Tab.Pane eventKey="#categoryHome">
                        <Quoteboardguide />
                      </Tab.Pane>

                      <Tab.Pane eventKey={`#${this.state.category}`}>
                        <Quotelist
                          category={this.state.category}
                          username={this.props.username}
                        />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Container>
          </div>
        </>
      )
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
