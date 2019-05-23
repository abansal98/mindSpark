import React, { Component } from "react";
import "./App.css";
import Content from "./Content";
import NavBar from "./Navbar";
import Footer from "./Footer";
import SignUp from "./SignUp";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/signup" render={() => <SignUp />} />
      </switch>
    );
  }
}

export default App;
