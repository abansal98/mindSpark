import React, { Component } from "react";
import "./App.css";
import Content from "./Content";
import NavBar from "./Navbar";
import Footer from "./Footer";
import SignUp from "./signup";
import SignIn from "./signin";
import Home from "./Home";
import Error from "./Error";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
