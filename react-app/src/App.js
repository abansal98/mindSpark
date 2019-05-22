import React, { Component } from "react";
import "./App.css";
import Content from "./Content";
import NavBar from "./navbar";
import Footer from "./Footer";
import SignUp from "./signup.js";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Content />
        {/* <header className="App-header">
          <SignUp />
        </header> */}

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
