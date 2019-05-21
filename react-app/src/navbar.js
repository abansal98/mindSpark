import React, { Component } from "react";
import logo from "./logo.png";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <span>
          [NAVBAR AREA] <img src={logo} className="App-logo" alt="logo" />{" "}
        </span>
      </nav>
    );
  }
}

export default NavBar;
