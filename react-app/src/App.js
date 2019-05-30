import React, { Component } from "react";
import "./App.css";
// import Content from "./Components/Content";
// import NavBar from "./Components/Navbar";
// import Footer from "./Components/Footer";
import SignUp from "./components/Signup/signup";
import SignIn from "./components/Signin/signin";
import Quoteboard from "./components/Quoteboard/Quoteboard";
import Error from "./components/Error/Error";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={SignIn} exact />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Quoteboard} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
