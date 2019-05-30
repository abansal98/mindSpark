import React, { Component } from "react";
import logoIcon from "./icons/logo.png";
import userProfileIcon from "./icons/baseline-account_circle-24px.svg";
import addQuoteIcon from "./icons/baseline-create-24px.svg";
import logout from "./icons/baseline-exit_to_app-24px.svg";
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
          <Navbar.Brand href="/home">
            <img
              src={logoIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <span className="teamName">mindSpark</span>
          </Navbar.Brand>

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
