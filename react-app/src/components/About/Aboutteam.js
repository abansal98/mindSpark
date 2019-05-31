import React, { Component } from "react";
import logo from "../../icons/logo.png";
import "./Aboutteam.css";

class Aboutteam extends Component {
  render() {
    return (
      <div className="aboutteamBody">
        <div className="container">
          <div className="py-1 text-center ">
            <img
              className="d-block mx-auto mb-4"
              src={logo}
              alt=""
              width="100"
              height="100"
            />
            <h1>"mindSpark"</h1>
            <p className="lead">
              MindSpark is a web application that let’s users share quotes that
              inspirit one another.
              {/* “mindSpark” is an app that encourages people through quotes and
              messages. It helps people who are having tough time with emotional
              problem. It also lets you share your own quotes to help community
              build curated ideas. */}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutteam;
