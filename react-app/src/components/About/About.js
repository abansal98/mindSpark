import React, { Component } from "react";
import "./About.css";
import Aboutteam from "./Aboutteam";
import Samplequotelist from "./Samplequotelist";
import Aboutcard from "./Aboutcard";
import Howtouse from "./Howtouse";

class About extends Component {
  render() {
    return (
      <div className="aboutBody">
        <AboutBlurBg />
        <div>
          <Aboutteam />
          <Samplequotelist />
          <Howtouse />
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
