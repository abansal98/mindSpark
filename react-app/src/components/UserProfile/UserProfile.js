import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import $ from "jquery";
import ProfileForm from "./ProfileForm";
import PersonalQuote from "./PersonalQuote";
import AddQuote from "./AddQuote";
import ReminderForm from "./ReminderForm";
import "./UserProfile.css";
import { Tab, Row, Col, Nav } from "react-bootstrap";

class UserProfile extends Component {
  render() {
    return (
      <div class="row b">
        <Tab.Container id="left-tabs-example" defaultActiveKey="addquote">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="addquote">Add Quote</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="userinformation">
                    User Information
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="reminder">Set Reminder Schedule</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="addquote">
                  <AddQuote />
                  <PersonalQuote />
                </Tab.Pane>
                <Tab.Pane eventKey="userinformation">
                  <ProfileForm username={this.props.username} />
                </Tab.Pane>
                <Tab.Pane eventKey="reminder">
                  <ReminderForm />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

        {/* <div class="col">
          <ProfileForm username={this.props.username} />
        </div>
        <div class="col">
          <AddQuote />
          <PersonalQuote />
        </div>
        <div class="col">
          <ReminderForm />
        </div> */}
      </div>
    );
  }
}

export default UserProfile;
