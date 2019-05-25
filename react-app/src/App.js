import React, { Component } from "react";
import "./App.css";
import Content from "./Content";
import NavBar from "./Navbar";
import Footer from "./Footer";
import SignUp from "./signup";
import SignIn from "./signin";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={() => <SignIn />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route path="/home" render={() => <Home />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
