import React, { Component } from "react";
import logoIcon from "../../icons/logo.png";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

class NavBarSignin extends Component {
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
          <Navbar.Brand href="/signin">
            <img
              src={logoIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <span className="teamName">mindSpark</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/signup">Register</Nav.Link>
              <Nav.Link href="/signin">Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    );
  }
}

export default NavBarSignin;
