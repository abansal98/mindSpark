import React, { Component } from "react";
import "./Category.css";
import { Container, Row, Col } from "react-bootstrap";

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
        <div className="categoryName">{categories[0]}</div>
        <div className="categoryName">{categories[1]}</div>
        <div className="categoryName">{categories[2]}</div>
        <div className="categoryName">{categories[3]}</div>
        <div className="categoryName">{categories[4]}</div>
        <div className="categoryName">{categories[5]}</div>
        <div className="categoryName">{categories[6]}</div>
        <div className="categoryName">{categories[7]}</div>
      </React.Fragment>
    );
  }
}

export default Category;
