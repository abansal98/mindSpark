import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/Signup/signup";
import SignIn from "./components/Signin/signin";
import SignUpSignIn from "./components/SignUpSignIn/SignUpSignIn";
import Quoteboard from "./components/Quoteboard/Quoteboard";
import Error from "./components/Error/Error";
import About from "./components/About/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/signup" component={SignUpSignIn} />
          <Route path="/quoteboard" component={Quoteboard} />
          <Route path="/signin" component={SignIn} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
