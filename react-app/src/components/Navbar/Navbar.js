import React, { Component } from "react";
import logoIcon from "../../icons/logo.png";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import Search from "../Search/Search";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <Navbar
          collapseOnSelect
          expand="md"
          // bg="light"
          variant="dark"
          fixed="top"
          className="bg-custom-navbar"
        >
          <Navbar.Brand href="/quoteboard">
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
              <Nav.Link href="/quoteboard">Quotes</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
              <Search />
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Navbar.Brand>Hello, {this.props.username}</Navbar.Brand>
            <Nav>
              <Nav.Link href="/userprofile">User Profile</Nav.Link>
              <Nav.Link href="/db/logout">Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    );
  }
}

export default NavBar;
