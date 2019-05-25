import React, { Component } from "react";
import "./App.css";
import Content from "./Content";
import NavBar from "./navbar";
import Footer from "./Footer";
import SignUp from "./signup";
import { BrowserRouter, Route } from "react-router-dom";

class Home extends Component {
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

export default Home;
