import React, { Component } from "react";
import ProfileForm from "./ProfileForm";
import PersonalQuote from "./PersonalQuote";
import AddQuote from "./AddQuote";
import ReminderForm from "./ReminderForm";
import "./UserProfile.css";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";

class UserProfile extends Component {
  render() {
    return (
      <div className="userprofileBody">
        {/* <Tab.Container id="left-tabs-example" defaultActiveKey="addquote">
          <Row>
            <Col md={2}>
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
            <Col md={10}>
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
        </Tab.Container> */}

        <Tab.Container
          id="list-group-tabs-example"
          defaultActiveKey="#addquote"
        >
          <Row>
            <Col sm={2} className="up_leftside">
              <ListGroup>
                <ListGroup.Item action href="#addquote">
                  Add Quote
                </ListGroup.Item>
                <ListGroup.Item action href="#userinformation">
                  User Information
                </ListGroup.Item>
                <ListGroup.Item action href="#reminder">
                  Set Reminder Schedule
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={10} className="up_rightside">
              <Tab.Content>
                <Tab.Pane eventKey="#addquote">
                  <AddQuote />
                  <PersonalQuote />
                </Tab.Pane>
                <Tab.Pane eventKey="#userinformation">
                  <ProfileForm username={this.props.username} />
                </Tab.Pane>
                <Tab.Pane eventKey="#reminder">
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
