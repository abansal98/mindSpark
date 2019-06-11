import React, { Component } from "react";
import logoIcon from "../../icons/logo.png";
import userProfileIcon from "../../icons/baseline-account_circle-24px.svg";
import addQuoteIcon from "../../icons/baseline-create-24px.svg";
import logout from "../../icons/baseline-exit_to_app-24px.svg";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  NavbarBrand
} from "react-bootstrap";
import { Link } from "react-router-dom";
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
            <Nav className="mr-auto">
              {/* <Nav.Link href="/signup">Signup</Nav.Link> */}
              <Nav.Link href="/">About</Nav.Link>
            </Nav>
            <Nav className="searchBar">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
            <Nav>
              {/* <Navbar.Brand>Hi, LoremIpsum!</Navbar.Brand> */}

              <Navbar.Brand>Hello, {this.props.username}</Navbar.Brand>
              <Navbar.Brand>
                <a href="/userprofile">
                  <img
                    src={addQuoteIcon}
                    width="30"
                    height="30"
                    className="d-inline-block align-top userProfileIcon"
                  />
                </a>
                <a href="/userprofile" className="userProfileIcon">
                  <img
                    src={userProfileIcon}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />
                </a>
                <a href="/db/logout">
                  {/* <Button variant="light">LOGOUT</Button> */}
                  {/* Implement logout feature here! */}
                  <img
                    src={logout}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />
                </a>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    );
  }
}

export default NavBar;
