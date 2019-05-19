import React, { Component } from "react";
import logo from "./logo.svg";

class Content extends Component {
  render() {
    return (
      <article>
        <p>This is Start of Content</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is End of Content</p>
      </article>
    );
  }
}

export default Content;
