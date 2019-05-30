import React, { Component } from "react";
import NavBar from "./Navbar";
import notFoundImage from "./image/concretetree.jpg";
import "./Error.css";

class Error extends Component {
  render() {
    let className = "menu";
    if (this.props.isActive) {
      className += " menu-active";
    }
    return (
      <div className={className}>
        <NavBar />
        <h1>404</h1>
      </div>
    );
  }
}

export default Error;
