import React, { Component } from "react";
import "./Category.css";
import { Container, Row, Col, Tab, ListGroup } from "react-bootstrap";
import $ from "jquery";
import Quotelist from "./Quotelist";
import Quoteboardguide from "../Quoteboard/Quoteboardguide";
import { connect } from "react-redux";
import store from "../../store/index";
import { addArticle } from "../../actions/index";

const categories = [
  "Depressed",
  "Weariness",
  "Laziness",
  "Loneliness",
  "Stress",
  "Nervousness",
  "Nostalgia",
  "Grief"
];

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

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <React.Fragment>
        {/* temporary for CATEGORY HOME */}
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
          })}
          <ListGroup.Item>asdf</ListGroup.Item>
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default Category;
