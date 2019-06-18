import React, { Component } from "react";
import $ from "jquery";
import Error from "../Error/Error";

class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trueToken: "false"
    };
  }

  checkRegistrationToken(e) {
    e = this.props.match.params.token;
    // console.log(e);
    //e.preventDefault();
    $.ajax({
      url: "/db/checkRegistrationToken",
      method: "POST",
      data: {
        secretToken: e
      }
    })
      .then(msg => {
        // alert(msg);
        this.state.trueToken = "true";
        //console.log(this.state.trueToken + "then");
      })
      .fail(err => {
        this.state.trueToken = "false";
        return <Error />;
      });
  }

  componentDidMount() {
    this.checkRegistrationToken();
  }

  render() {
    if (this.state.trueToken === "true") {
      return (
        <div className="header mt-2">
          <h1>Recover Password</h1>
        </div>
      );
    } else {
      return <Error />;
    }
  }
}

export default Verify;
