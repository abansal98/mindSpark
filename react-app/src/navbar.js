import React, { Component } from "react";
import logo from "./logo.png";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="#home">mindSpark</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#sample1">Sample1</Nav.Link>
            <Nav.Link href="#Sample2">Sample2</Nav.Link>
            <Nav.Link href="#Sample3">Sample3</Nav.Link>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </Nav>
        </Navbar>
      </nav>
    );
  }
}

export default NavBar;
