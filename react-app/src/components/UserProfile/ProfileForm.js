import React, { Component } from "react";
import $ from "jquery";

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <h2> User Information </h2>
        <div className="wrapper" ref={this.props.containerRef}>
          <div className="form-wrapper">
            <div className="header" />
            <form>
              <div class="form-group">
                <div className="username">
                  <label htmlFor="username">UserName:</label>
                  <input
                    placeholder="UserName"
                    type="text"
                    name="username"
                    class="form-control"
                    value={this.props.username}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    class="form-control"
                    value={this.props.email}
                  />
                </div>
              </div>
              {/* <button className="btn btn-primary" type="submit">
                Update
              </button> */}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileForm;
