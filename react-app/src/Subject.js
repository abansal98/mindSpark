import React, { Component } from "react";
import logo from "./logo.png";

class Subject extends Component {
  render() {
    return (
      <header>
        <span>[SUBJECT AREA]</span>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Subject;
