import React, { Component } from "react";
import logoIcon from "../../icons/logo.png";
import { Navbar, Nav } from "react-bootstrap";

import "./Navbar.css";

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
          bg="dark"
          variant="dark"
          fixed="top"
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
            </Nav>
            {/* <Nav className="searchBar">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav> */}
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
