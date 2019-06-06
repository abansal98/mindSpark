import React, { Component } from "react";
import "./Category.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import $ from "jquery";

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
      this.state.something,
      (
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
          </ListGroup>
          {/* <ListGroup className="categoryName mt-5">          
          <ListGroup.Item as="li" active>
            {categories[0]}
          </ListGroup.Item>
          <ListGroup.Item as="li" active>
            {categories[1]}
          </ListGroup.Item>
          <ListGroup.Item as="li" active>
            {categories[2]}
          </ListGroup.Item>
          <ListGroup.Item as="li" active>
            {categories[3]}
          </ListGroup.Item>
          <ListGroup.Item as="li" active>
            {categories[4]}
          </ListGroup.Item>
          <ListGroup.Item as="li" active>
            {categories[5]}
          </ListGroup.Item>
          <ListGroup.Item as="li" active>
            {categories[6]}
          </ListGroup.Item>
          <ListGroup.Item as="li" active>
            {categories[7]}
          </ListGroup.Item>
        </ListGroup> */}
        </React.Fragment>
      )
    );
  }
}

export default Category;
