import React, { Component } from "react";
import "./App.css";
import SignUpSignIn from "./components/SignUpSignIn/SignUpSignIn";
import Quoteboard from "./components/Quoteboard/Quoteboard";
import Error from "./components/Error/Error";
import About from "./components/About/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import Footer from "./components/Footer/Footer";
import NavBarSignIn from "./components/Navbar/NavbarSignin";
import $ from "jquery";
import NavBar from "./components/Navbar/Navbar";
import Verify from "./components/Signup/verify";
import ResetPassword from "./components/ForgotPassword/ResetPassword";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: "",
      isLoggedIn: false,
      email: "",
      avatar: "",
      didLoad: false
    };
  }

  // UNSAFE_componentWillMount() {
  //   //make a request
  //   this.getLoginStatus();
  //   // this.getUserInfo();
  //   console.log("componentWillMount called");
  // }

  quoteboardAccess() {
    if (this.state.isLoggedIn) {
      // this.quoteboardOrSignup = "Quoteboard";
      return () => <Quoteboard username={this.state.username} />;
    } else {
      // this.quoteboardOrSignup = "SignUpSignIn";
      return SignUpSignIn;
    }
  }
  signupAccess() {
    if (this.state.isLoggedIn) {
      // this.quoteboardOrSignup = "Quoteboard";
      return Quoteboard;
    } else {
      // this.quoteboardOrSignup = "SignUpSignIn";
      return SignUpSignIn;
    }
  }

  navbarSelect() {
    if (this.state.isLoggedIn) {
      return <NavBar username={this.state.username} />;
    } else {
      return <NavBarSignIn />;
    }
  }

  getLoginStatus() {
    $.ajax({
      url: "/db/ensureLogin",
      method: "GET"
    })
      .then(user => {
        this.setState({
          username: user,
          isLoggedIn: true,
          didLoad: !this.state.didLoad
        });
      })
      .fail(err => {
        this.setState({
          username: "",
          isLoggedIn: false,
          didLoad: !this.state.didLoad
        });
      });
  }

  getUserInfo() {
    $.ajax({
      url: "/db/getUserInfo/" + this.state.username,
      method: "GET"
    })
      .then(data => {
        // console.log(data[0].avatar);
        // console.log(data[0].email);
        this.setState({
          email: data[0].email,
          avatar: data[0].avatar
        });
      })
      .fail(err => {
        this.setState({
          email: ""
        });
      });
  }

  componentDidMount() {
    this.getLoginStatus();
    // this.getUserInfo();
    // this.quoteboardAccess();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.username !== prevState.username) {
      this.setState(prevState => {
        return {
          didLoad:
            prevState.didLoad == true ? prevState.didLoad : !prevState.didLoad
        };
      });
      this.getUserInfo();
    }
  }

  render() {
    return (
      <div id="root">
        {this.navbarSelect()}
        <BrowserRouter>
          <Switch>
            {this.state.didLoad && (
              <>
                <Route path="/" component={About} exact />
                <Route path="/signup" component={this.signupAccess()} />
                <Route path="/verify" component={Verify} exact />
                <Route path="/quoteboard" component={this.quoteboardAccess()} />
                <Route
                  path="/signin"
                  component={() => <SignUpSignIn signValue="signin" />}
                />
                <Route
                  path="/userProfile"
                  component={() => (
                    <UserProfile
                      avatar={this.state.avatar}
                      username={this.state.username}
                    />
                  )}
                />
                <Route path="/reset/:token" component={ResetPassword} />
                <Route path="/verify/:token" component={Verify} />
              </>
            )}
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
