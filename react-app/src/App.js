import React, { Component } from "react";
import "./App.css";
import Subject from "./Subject";
import Content from "./Content";
import NavBar from "./navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject />
        <NavBar />
        <Content />
      </div>
    );
  }
}

export default App;
