import React, { Component } from "react";
import Footer from "../Footer/Footer";
import logo from "../../icons/logo.png";
import { Button } from "react-bootstrap";
import "../Signup/signup.css";
import $ from 'jquery'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            userValid: false,
            formValid: false,
            error: { username: "", password: "" }
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        $.ajax({
            url: '/db/signin',
            method: 'POST',
            data: {
                username: this.state.username,
                password: this.state.password
            }
        })
            .then(() => {
                window.location.href = '/';
            })
            .fail((err) => {
                alert(err.responseText);
            })
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => {
            this.validateField(name, value);
        });
    }

    handleSignIn(e) {

    }

    validateField(fieldName, value) {
        let errors = this.state.error;
        let usrValid = this.state.userValid;

        switch (fieldName) {
            case "username":
                usrValid = value.match();
                errors.username = usrValid ? "" : " is invalid";
                break;
            default:
                break;
        }
        this.setState(
            {
                error: errors,
                userValid: usrValid
            },
            this.validateForm
        );
    }

    validateForm() {
        this.setState({
            formValid: this.state.userValid
        });
    }

    render() {
        return (

            <div className="wrapper" ref={this.props.containerRef}>

                <div className="form-wrapper">
                    <div className="header"><h1>Sign In</h1></div>

                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">

                            <div className="username">
                                <label htmlFor="username">UserName</label>
                                <input
                                    onChange={this.handleUserInput.bind(this)}
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
                                className="btn btn-secondary btn-sm"
                            >
                                Send Verification Email                  </button>
                        </div>

                    </form>
                    <br />
                </div>

            </div>




        );
    }
}

export default SignIn;
