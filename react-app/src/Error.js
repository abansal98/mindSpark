import React, { Component } from "react";
import NavBar from "./Navbar";
import notFoundImage from "./image/404.jpg";
import "./Error.css";

class Error extends Component {
  render() {
    return (
      <div className="page-container">
        <NavBar />
        <div
          className="bg"
          style={{ backgroundImage: "url(" + notFoundImage + ")" }}
        />
        <h1 className="title">404</h1>
      </div>
    );
  }
}

export default Error;
