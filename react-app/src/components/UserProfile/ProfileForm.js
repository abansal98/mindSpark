import React, { Component } from "react";

class ProfileForm extends Component {
    render() {
        return (
            <React.Fragment>
                <h2> User Information </h2>
                <div className="wrapper" ref={this.props.containerRef}>
                    <div className="form-wrapper">
                        <div className="header">
                        </div>
                        <form>
                            <div class="form-group">
                                <div className="username">
                                    <label htmlFor="username">UserName</label>
                                    <input
                                        placeholder="UserName"
                                        type="text"
                                        name="username"
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
                                    />
                                </div>
                            </div>
                                <button className="btn btn-primary" type="submit">
                                    Update
                                </button>
                                <button className="btn btn-primary" type="submit">
                                    Reset Password
                                </button>
                        </form>
                    </div>
                </div>
      </React.Fragment >
      );
    }
}

export default ProfileForm;