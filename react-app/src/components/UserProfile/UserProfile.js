import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import $ from "jquery";
import ProfileForm from "./ProfileForm";
import PersonalQuote from "./PersonalQuote";
import ReminderForm from "./ReminderForm";
import "./UserProfile.css";

class UserProfile extends Component {
    render() {
        return (
            <div class="row b">
                <NavBar />
                <div class="col">
                    <ProfileForm />
                </div>
                <div class="col">
                    <PersonalQuote />
                </div>
                <div class="col">
                    <ReminderForm />
                </div>
            </div>
        );
    }
}

export default UserProfile;
