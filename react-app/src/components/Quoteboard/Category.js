import React, { Component } from "react";
import "./Category.css";
import { Container, Row, Col, Tab, ListGroup } from "react-bootstrap";
import $ from "jquery";
import Quotelist from "./Quotelist";
import Quoteboardguide from "../Quoteboard/Quoteboardguide";
import { connect } from "react-redux";
import store from "../../store/index";
import { addArticle } from "../../actions/index";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      categories: [],
      something: "This is something"
    };
  }

  getCategories() {
    $.ajax({
      url: "/db/getCategories",
      method: "GET"
    }).then(data => {
      this.setState({
        categories: data
      });
      console.log(this.state.categories);
    });
  }

  mkTestFunction() {
    console.log("I'm function from Category.js");
  }

  setCategory(categoryID){
    store.dispatch({
      type: "category",
      categoryName: categoryID
    })
  }

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <React.Fragment>
        <Col md={2} className="quoteboardleftside pt-5">
          <ListGroup>
            <ListGroup.Item action href="#categoryHome" variant="success">
              Home
            </ListGroup.Item>
          </ListGroup>
          {/* temporary for CATEGORY HOME */}
          <ListGroup>
            {this.state.categories.map((value, index) => {
              return (
                <ListGroup.Item
                  action
                  href={`#${value.categoryID}`}
                  variant="success"
                >
                  {value.categoryName}
                </ListGroup.Item>
              );
              // return (
              //   <button onClick={() => {this.props.onClick(value.categoryID)}}/>
              // )
            })}
          </ListGroup>
        </Col>
        <Col md={10} className="quoteboardrightside pt-5">
          {/* <Quotelist /> */}
          <Tab.Content>
            <Tab.Pane eventKey="#categoryHome">
              <Quoteboardguide />
            </Tab.Pane>
            {this.state.categories.map((value, index) => {
              return (
                <Tab.Pane eventKey={`#${value.categoryID}`}>
                  <Quotelist category={value.categoryName} />
                </Tab.Pane>
              );
            })}
          </Tab.Content>
        </Col>
      </React.Fragment>
    );
  }
}

export default Category;
