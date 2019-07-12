import React, { Component } from "react";
import "./Error.css";

class Error extends Component {
  render() {
    // let className = "menu";
    // if (this.props.isActive) {
    //   className += " menu-active";
    // }
    return (
      // <div className={className}>
      <div className="errorBody">
        <div className="menu">
          <h1>404</h1>
        </div>
      </div>
    );
  }
}

export default Error;
