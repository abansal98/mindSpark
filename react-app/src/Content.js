import React, { Component } from "react";
import logo from "./logo.svg";

class Content extends Component {
  render() {
    return (
      <article>
        <div>[Beginning of content area]</div>
        <img src={logo} className="App-logo" alt="logo" />
        <div>[End of content area]</div>
      </article>
    );
  }
}

export default Content;
