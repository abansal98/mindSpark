import React, { Component } from "react";
import SignUp from "../Signup/signup";
import SignIn from "../Signin/signin";
import ForgotPassword from "../ForgotPassword/ForgotPassoword";
import "./SignUpSignIn.css";
import { Tab, Tabs } from "react-bootstrap";

class SignUpSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signValue: this.props.signValue
    };
    {
      console.log("from SignUpSignIn 1 state");
    }
    {
      console.log("from SignUpSignIn 1 prop");
    }
    {
      console.log(this.props.signValue);
    }
    {
      console.log(this.state.signValue);
    }
  }
  render() {
    return (
      <div className="signupsigninbody">
        <SignupsigninBlurBg />
        <div class="container">
          <ControlledTabs signValue={this.props.signValue} />
          {console.log("from SignUpSignIn 2")}
          {console.log(this.state.signValue)}
        </div>
      </div>
    );
  }
}

class ControlledTabs extends Component {
  constructor(props, context) {
    super(props, context);

    // var userKey = "signup";
    // var isLoggin = SignUpSignIn.isLoggin;
    // if (isLoggin) {
    //   userKey = "login";
    // } else {
    //   userKey = "signup";
    // }

    this.state = {
      signValue: this.props.signValue
    };
    console.log("CONTROLTABS props...");
    console.log(this.props.signValue);
    console.log("CONTROLTABS state...");
    console.log(this.state.signValue);
  }

  // componentDidMount() {
  //   this.setState({
  //     key: this.props.key
  //   });
  //   console.log(this.props.key);
  // }

  render() {
    return (
      <div className="signtabbody">
        <div className="samplequoteBoxBg">
          <div className="signtabcontentbody">
            <Tabs
              id="controlled-tab-example"
              activeKey={this.state.signValue}
              onSelect={key => this.setState({ signValue: key })}
              className="justify-content-center"
            >
              {console.log("From Tabs prop...")}
              {console.log(this.props.signValue)}
              {console.log("From Tabs state...")}
              {console.log(this.state.signValue)}
              <Tab eventKey="signup" title="Register">
                <SignUp />
              </Tab>
              <Tab eventKey="signin" title="Sign In">
                <SignIn />
              </Tab>
              <Tab eventKey="forgotpassword" title="Forgot Password?">
                <ForgotPassword />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

class SignupsigninBlurBg extends Component {
  render() {
    return <div className="SignupsigninBlurBgBody" />;
  }
}
export default SignUpSignIn;
