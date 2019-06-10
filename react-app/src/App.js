import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/Signup/signup";
import SignIn from "./components/Signin/signin";
import SignUpSignIn from "./components/SignUpSignIn/SignUpSignIn";
import Quoteboard from "./components/Quoteboard/Quoteboard";
import Error from "./components/Error/Error";
import About from "./components/About/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import Footer from "./components/Footer/Footer"

class App extends Component {
  render() {
    return (
      <div id="root">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/signup" component={SignUpSignIn} />
          <Route path="/quoteboard" component={Quoteboard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/userProfile" component={UserProfile} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
