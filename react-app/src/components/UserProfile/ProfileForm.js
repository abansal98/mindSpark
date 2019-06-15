import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class ProfileForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

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
                                    <label htmlFor="username">UserName:</label>
                                    <input
                                        placeholder="UserName"
                                        type="text"
                                        name="username"
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
                                    />
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">
                                Update
                                </button>
                        </form>
                        <button className="btn btn-primary" type="submit" onClick={this.handleShow}>
                            Reset Password
                                </button>

                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                                    </Button>
                                <Button variant="primary" onClick={this.handleClose}>
                                    Save Changes
                                    </Button>
                            </Modal.Footer>
                        </Modal>

                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default ProfileForm;