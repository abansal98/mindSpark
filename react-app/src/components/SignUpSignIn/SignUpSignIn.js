import React from "react";
import SignUp from "../Signup/signup";
import SignIn from "../Signin/signin";
import ForgotPassword from "../ForgotPassword/ForgotPassoword"
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
  Sonnet
} from "react-bootstrap";

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

class ControlledTabs extends React.Component {
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
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="signup" title="Sign Up">
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
    );
  }
}

class SignUpSignIn extends React.Component {
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
      <div class="signupsigninBody">
        <NavBarSignIn />
        <div class="container">
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
          <ControlledTabs />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default SignUpSignIn;
