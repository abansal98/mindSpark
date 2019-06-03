import React, { Component } from "react";
import "./About.css";
import NavBarSignin from "../Navbar/NavbarSignin";
import Aboutteam from "./Aboutteam";
import Samplequotelist from "./Samplequotelist";

class About extends Component {
  render() {
    return (
      <div className="aboutBody">
        <AboutBlurBg />
        <NavBarSignin />
        <div className="aboutMain">
          <Aboutteam />
          <Samplequotelist />
        </div>
      </div>
    );
  }
}

class AboutBlurBg extends Component {
  render() {
    return <div className="aboutBlurBgBody" />;
  }
}

export default About;
