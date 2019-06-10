import React, { Component } from "react";
import "./About.css";
import NavBarSignin from "../Navbar/NavbarSignin";
import Aboutteam from "./Aboutteam";
import Samplequotelist from "./Samplequotelist";
import Aboutcard from "./Aboutcard";

class About extends Component {
  render() {
    return (
      <div className="aboutBody">
        <AboutBlurBg />
        <div>
          <Aboutteam />
          <Samplequotelist />
          <Aboutcard />
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
