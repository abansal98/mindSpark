import React, { Component } from 'react';
import $ from 'jquery';
import { Modal } from 'react-bootstrap';

class ShowComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: [],
            didLoad: false,
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

    fetchQuote(id) {
        $.ajax({
            url: "/db/getQuotes/" + id,
            method: "GET"
        })
            .then(data => {
                console.log(data.comments);
                this.setState({
                    comment: data.comments,
                    didLoad: true
                })
                    .fail(err => {
                        this.setState({
                            comment: [],
                            didLoad: false
                        });
                    });
            }
        }

    componentDidMount() {
        this.fetchQuote(this.props.quoteId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.needToReload == true) {
            this.fetchQuote(this.props.quoteId);
            this.props.toggleRefresh();
        }
    }

    // handleDelete(e)
    // {
    //     e.preventDefault();
    //     $.ajax({
    //         url: "db/quote/comment/remove/" + this.props.quoteId + "/" + this.state.comment._id,

    //     })
    // }

    render() {
        return (
            <React.Fragment>
                {this.state.didLoad &&
                    <div className="showComment">
                        {this.state.comment.map(text => {
                            return (
                                <div key={text._id} className="comment">
                                    <div style={{ display: 'inline-block' }}>
                                        <img className="round-img" src={text.avatar} alt='' />
                                        <h5>{text.name}</h5>
                                    </div>
                                    <div style={{ display: 'inline-block' }}>
                                        <p className="idontknow">
                                            {text.commentText}
                                        </p>
                                        <p>Posted on {text.date}</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary" type="submit" onClick={this.handleShow}>Delete</button>
                                        <Modal show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Do you really want to delete this?</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                Hi
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <button variant="secondary" onClick={this.handleClose}>
                                                    Close
                                                </button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default ShowComment;