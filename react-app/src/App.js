import React, { Component } from "react";
import "./App.css";
import Content from "./Content";
import NavBar from "./navbar";
import Footer from "./Footer";
import SignUp from "./signup";
import SignIn from "./signin";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <SignIn />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/home" render={() => <Home />} />
      </div>
    );
  }
}

export default App;
