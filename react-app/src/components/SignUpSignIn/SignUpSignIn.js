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
  }
  render() {
    return (
      <div className="signupsigninbody">
        <SignupsigninBlurBg />
        <div class="container">
          <ControlledTabs signValue={this.props.signValue} />
        </div>
      </div>
    );
  }
}

class ControlledTabs extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      signValue: this.props.signValue
    };
  }
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
