import React, { Component } from "react";
import Footer from "../Footer/Footer";
import logo from "../../icons/logo.png";
import { Button } from "react-bootstrap";
import "../Signup/signup.css";
import $ from 'jquery'

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email:"",
            userValid: false,
            formValid: false,
            error: { username: "", email: "" }
        };
    }

    render() {
        return (
            <div className="wrapper" ref={this.props.containerRef}>
                <div className="form-wrapper">
                    <div className="header"></div>
                    <form>
                        <div className="form-group">
                            <div className="username">
                                <label htmlFor="username">UserName</label>
                                <input
                                    name="username"
                                    className="form-control"
                                    type="text"
                                    value={this.state.username}
                                    placeholder="Enter Your Username or Email"
                                />
                            </div>
                        </div>
                        <div class="createAccount">
                            <button
                                type="submit"
                                className="btn btn-secondary btn-sm">Send Verification Email </button></div>
                    </form>
                    <br />
                </div>
            </div>
        );
    }
}

export default ForgotPassword;
