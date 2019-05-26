import React, { Component } from "react";
import "./Category.css";
import { Container, Row, Col } from "react-bootstrap";

const categories = ["Depressed", "Weariness", "Laziness", "Loneliness"];

class Category extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="categoryName">{categories[0]}</div>
        <div className="categoryName">{categories[1]}</div>
        <div className="categoryName">{categories[2]}</div>
        <div className="categoryName">{categories[3]}</div>
      </React.Fragment>
    );
  }
}

export default Category;
