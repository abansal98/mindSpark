import React from 'react';
import SignUp from '../Signup/signup';
import SignIn from '../Signin/signin';
import "./SignUpSignIn.css";
import NavBarSignIn from '../Navbar/NavbarSignin';
import Footer from '../Footer/Footer';


const RightSide = props => {
    return (
        <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
            <div class="inner-container">
                <div className="text">{props.current}</div>
            </div>
        </div>
    )
}

class SignUpSignIn extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {isLoggin: true};
    }

    componentDidMount()
    {
        this.rightside.classList.add("right");
    }

    changeState()
    {
        const {isLoggin} = this.state;

        if (isLoggin)
        {
            this.rightside.classList.remove("right");
            this.rightside.classList.add("left")
        }
        else
        {
            this.rightside.classList.remove("left");
            this.rightside.classList.add("right");
        }

        this.setState(prevState => ({isLoggin: !prevState.isLoggin}));

        
    }

    render()
    {
        const {isLoggin} = this.state;
        const current = isLoggin ? 'Log In' : 'Register';
        return(
            <div class="wrapper">
                <NavBarSignIn/>
                <div class="signupsignin">
                    <div className="container" ref={ref => (this.container = ref)}>
                        {!isLoggin && (
                            <SignIn containerRef={ref => (this.current = ref)}/>
                        )}

                        {isLoggin && (
                            <SignUp containerRef={ref => (this.current = ref)}/>
                        )}
                    </div>
                    <RightSide
                        current={current}
                        containerRef={ref => (this.rightside = ref)}
                        onClick={this.changeState.bind(this)}/>
                </div>
                <Footer/>
            </div>
        );

    }
}

export default SignUpSignIn;