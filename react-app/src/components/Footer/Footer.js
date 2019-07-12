import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footerBody">
          <footer>
            <div style={{ paddingLeft: 20 }}>
              <h4>© mindSpark - 2019</h4>
            </div>
          </footer>
        </div>
      </React.Fragment >
    );
  }
}
export default Footer;
