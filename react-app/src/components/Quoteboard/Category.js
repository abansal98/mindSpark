import React, { Component } from "react";
import "./Category.css";
import { Container, Row, Col, Tab, ListGroup } from "react-bootstrap";

class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListGroup.Item
        action
        href={`#${this.props.categoryID}`}
        variant="success"
        onClick={() => { this.props.onClick(this.props.categoryName) }}
      >
        {this.props.categoryName}
      </ListGroup.Item>
    );
  }
}

export default Category;