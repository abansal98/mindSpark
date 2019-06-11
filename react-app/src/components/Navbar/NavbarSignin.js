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
  NavbarBrand,
  ButtonToolbar,
  button,
  NavItem
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SignIn from "../Signin/signin";
import SignUp from "../Signup/signup";
import About from "../About/About";

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
          <Navbar.Brand href="/signup">
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
              <Nav.Link href="/signup">Signup</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* <Navbar.Collapse className="justify-content-end">
            <Button
              variant="primary"
              type="button"
              class="btn btn-secondary btn-sm"
              href="/signup"
            >
              Sign Up
            </Button>
          </Navbar.Collapse> */}
        </Navbar>
      </nav>
    );
  }
}

export default NavBarSignin;
