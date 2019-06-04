import React, { Component } from "react";
import SignUp from "../Signup/signup";
import SignIn from "../Signin/signin";
import ForgotPassword from "../ForgotPassword/ForgotPassoword";
import "./SignUpSignIn.css";
import NavBarSignIn from "../Navbar/NavbarSignin";
import Footer from "../Footer/Footer";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  NavbarBrand,
  Tab,
  Tabs,
  Sonnet,
  Container
} from "react-bootstrap";
import Aboutteam from "../About/Aboutteam";
import Samplequotelist from "../About/Samplequotelist";
import Aboutcard from "../About/Aboutcard";

// const RightSide = props => {
//   return (
//     <div
//       className="right-side"
//       ref={props.containerRef}
//       onClick={props.onClick}
//     >
//       <div class="inner-container">
//         <div className="text">{props.current}</div>
//       </div>
//     </div>
//   );
// };

class SignUpSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggin: true };
  }

  // componentDidMount() {
  //   this.rightside.classList.add("right");
  // }

  // changeState() {
  //   const { isLoggin } = this.state;

  //   if (isLoggin) {
  //     this.rightside.classList.remove("right");
  //     this.rightside.classList.add("left");
  //   } else {
  //     this.rightside.classList.remove("left");
  //     this.rightside.classList.add("right");
  //   }

  //   this.setState(prevState => ({ isLoggin: !prevState.isLoggin }));
  // }

  render() {
    // const { isLoggin } = this.state;
    // const current = isLoggin ? "Log In" : "Register";

    return (
      <div className="signupsigninbody">
        {/* <div class="signupsigninBody"> */}
        <SignupsigninBlurBg />
        <NavBarSignIn />
        <div class="container">
          {/* <Aboutteam /> */}
          <ControlledTabs />

          {/* <div class="signupsignin">
            <div className="container" ref={ref => (this.container = ref)}>
              {!isLoggin && (
                <SignIn containerRef={ref => (this.current = ref)} />
              )}

              {isLoggin && (
                <SignUp containerRef={ref => (this.current = ref)} />
              )}
            </div>
            <RightSide
              current={current}
              containerRef={ref => (this.rightside = ref)}
              onClick={this.changeState.bind(this)}
            />
          </div> */}
        </div>
      </div>
    );
  }
}

class ControlledTabs extends Component {
  // componentDidMount() {
  //   this.rightside.classList.add("right");
  // }

  // changeState() {
  //   const { isLoggin } = this.state;

  //   if (isLoggin) {
  //     this.rightside.classList.remove("right");
  //     this.rightside.classList.add("left");
  //   } else {
  //     this.rightside.classList.remove("left");
  //     this.rightside.classList.add("right");
  //   }

  //   this.setState(prevState => ({ isLoggin: !prevState.isLoggin }));
  // }

  constructor(props, context) {
    super(props, context);
    var userKey = "signup";
    var isLoggin = SignUpSignIn.isLoggin;
    if (isLoggin) {
      userKey = "login";
    } else {
      userKey = "signup";
    }
    this.state = {
      key: userKey
    };
  }

  render() {
    return (
      <div className="signtabbody">
        <div className="samplequoteBoxBg">
          <div className="signtabcontentbody">
            <Tabs
              id="controlled-tab-example"
              activeKey={this.state.key}
              onSelect={key => this.setState({ key })}
              className="justify-content-center"
            >
              <Tab eventKey="signup" title="SignUp">
                <SignUp />
                {/* <Sonnet /> */}
              </Tab>
              <Tab eventKey="login" title="Login">
                <SignIn />
                {/* <Sonnet /> */}
              </Tab>
              <Tab eventKey="forgotpassword" title="Forgot Password?">
                <ForgotPassword />
                {/* <Sonnet /> */}
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
