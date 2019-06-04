import React, { Component } from "react";
import Footer from "../Footer/Footer";
import logo from "../../icons/logo.png";
import { Button } from "react-bootstrap";
import "../Signup/signup.css";
import $ from 'jquery'
import axios from 'axios';

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

    handleChange = name => event => {
        this.setStat({
            [name]: event.target.value,
        });
    }

    sendEmail = async (e) => {
        e.preventDefault();
        const { email } = this.state;
        if (email === '') {
          this.setState({
            showError: false,
            messageFromServer: '',
            showNullError: true,
          });
        } else {
          try {
            const response = await axios.post(
              'http://localhost:3003/forgotPassword',
              {
                email,
              },
            );
            console.log(response.data);
            if (response.data === 'recovery email sent') {
              this.setState({
                showError: false,
                messageFromServer: 'recovery email sent',
                showNullError: false,
              });
            }
          } catch (error) {
            console.error(error.response.data);
            if (error.response.data === 'email not in db') {
              this.setState({
                showError: true,
                messageFromServer: '',
                showNullError: false,
              });
            }
          }
        }
      };

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
