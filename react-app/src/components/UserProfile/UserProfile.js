import React, { Component } from "react";
import ProfileForm from "./ProfileForm";
import PersonalQuote from "./PersonalQuote";
import AddQuote from "./AddQuote";
import ReminderForm from "./ReminderForm";
import "./UserProfile.css";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";
import $ from "jquery";
import ChangePassword from "./ChangePassword";
import ValidationQuoteList from "./Admin/ValidationQuoteList";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needToReload: false
      // linkValue: this.props.linkValue
    };
  }

  toggleRefresh() {
    this.setState({
      needToReload: !this.state.needToReload
    });
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="userprofileBody">
        <Tab.Container
          id="list-group-tabs-example"
          defaultActiveKey={this.props.page}
        >
          <Row>
            <Col md={2} className="up_leftside">
              <ListGroup className="up_leftside_listgroup">
                <ListGroup.Item action href="#userinformation">
                  User Information
                </ListGroup.Item>
                <ListGroup.Item action href="#addquote">
                  Add Quote
                </ListGroup.Item>
                <ListGroup.Item action href="#personalquote">
                  Personal Quote
                </ListGroup.Item>
                <ListGroup.Item action href="#reminder">
                  Set Reminder Schedule
                </ListGroup.Item>
                {this.props.role == "admin" && (
                  <ListGroup.Item action href="#quoteapproval">
                    Quote Approvals
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Col>
            <Col md={10} className="up_rightside">
              <Tab.Content>
                <Tab.Pane eventKey="#addquote">
                  <AddQuote
                    username={this.props.username}
                    toggleRefresh={this.toggleRefresh.bind(this)}
                  />
                  <PersonalQuote
                    username={this.props.username}
                    needToReload={this.state.needToReload}
                    toggleRefresh={this.toggleRefresh.bind(this)}
                  />
                </Tab.Pane>
                <Tab.Pane
                  eventKey="#personalquote"
                  className="userprofileUserinformationBody"
                >
                  <PersonalQuote
                    username={this.props.username}
                    needToReload={this.state.needToReload}
                    toggleRefresh={this.toggleRefresh.bind(this)}
                  />
                </Tab.Pane>
                <Tab.Pane
                  eventKey="#userinformation"
                  className="userprofileUserinformationBody"
                >
                  <ProfileForm
                    username={this.props.username}
                    email={this.props.email}
                  />
                  <ChangePassword username={this.props.username} />
                </Tab.Pane>
                <Tab.Pane
                  eventKey="#reminder"
                  className="userprofileReminderBody"
                >
                  <ReminderForm username={this.props.username}/>
                </Tab.Pane>
                <Tab.Pane
                  eventKey="#quoteapproval"
                  className="userprofileReminderBody"
                >
                  <ValidationQuoteList />
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
