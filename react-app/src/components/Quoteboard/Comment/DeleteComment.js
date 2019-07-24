import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import $ from 'jquery';

class DeleteComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleDelete(e) {
        e.preventDefault();
        $.ajax({
            url: "db/quote/comment/remove/" + this.props.quoteId + "/" + this.props.commentId,
            method: "DELETE"
        })
            .then(() => {
                console.log("Delete successfully");
            })
            .catch(err => {
                console.log(err);
            })

        this.handleClose();
        this.props.reload();
    }

    render() {
        // have problem with commentId and author
        return (
            <>
            <button
                className="btn btn-primary"
                type="submit"
                onClick={this.handleShow}
            >
                Delete
            </button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Do you really want to delete this?
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body />
                <form onSubmit={this.handleDelete.bind(this)}>
                    {this.props.commentId}
                    <button type="submit" className="btn btn-primary">Yes</button>
                </form>
                <Modal.Footer>
                    <button variant="secondary" onClick={this.handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}

export default DeleteComment;