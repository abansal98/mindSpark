import React, { Component } from "react";
import "./App.css";
import Content from "./Content";
import NavBar from "./navbar";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Content />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
