import React, { Component } from "react";
import ProfileForm from "./ProfileForm";
import PersonalQuote from "./PersonalQuote";
import AddQuote from "./AddQuote";
import ReminderForm from "./ReminderForm";
import "./UserProfile.css";

class UserProfile extends Component {
    render() {
        return (
            <div class="row b">
                <div class="col">
                    <ProfileForm username={this.props.username} />
                </div>
                <div class="col">
                    <AddQuote />
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
