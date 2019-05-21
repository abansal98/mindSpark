import React, { Component } from "react";
import logo from "./icons/logo.png";
import userProfile from "./icons/baseline-account_circle-24px.svg";
import addQuote from "./icons/baseline-add_circle-24px.svg";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  NavbarBrand
} from "react-bootstrap";

// hello

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Navbar
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <span className="teamName">mindSpar</span>k
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#sample1">Sample1</Nav.Link>
              <Nav.Link href="#Sample2">Sample2</Nav.Link>
              <Nav.Link href="#Sample3">Sample3</Nav.Link> */}
            </Nav>
            <Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Navbar.Brand href="#addQuote">
                <img
                  src={addQuote}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Navbar.Brand>Hi, Lorem Ipsum!</Navbar.Brand>
              <Navbar.Brand href="#userProfile">
                <img
                  src={userProfile}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    );
  }
}

export default NavBar;
