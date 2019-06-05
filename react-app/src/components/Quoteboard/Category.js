import React, { Component } from "react";
import "./Category.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

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
  render() {
    return (
      <React.Fragment>
        <ListGroup className="categoryName mt-5">
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
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default Category;
