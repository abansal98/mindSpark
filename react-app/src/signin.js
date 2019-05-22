import React, {Component} from "react";

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            password: "",
            nameValid: false,
            passwordValid: false,
            formValid: false,
            error: {name:"", password:""}
        };
    }

    handleSubmit(e) {}

    handleUserInput(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => {
            this.validateField(name,value);
        })
    }

    

}