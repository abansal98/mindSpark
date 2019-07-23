import React, { Component } from "react";
import $ from "jquery";
import { Modal } from "react-bootstrap";
import DeleteComment from "./DeleteComment";

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
      url: "/db/getQuote/" + id,
      method: "GET"
    }).then(data => {
<<<<<<< HEAD
      console.log(data.comments);
=======
      // console.log(data.comments);
>>>>>>> f3bcda16622f3f8d1c6b9f52c1e1bb5520f10ccb
      this.setState({
        comment: data.comments,
        didLoad: true
      }).fail(err => {
        this.setState({
          comment: [],
          didLoad: false
        });
      });
    });
  }

  componentDidMount() {
<<<<<<< HEAD
    console.log("ShowComment called");
=======
    // console.log("ShowComment called");
>>>>>>> f3bcda16622f3f8d1c6b9f52c1e1bb5520f10ccb
    this.fetchQuote(this.props.quoteId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.needToReload == true) {
      this.fetchQuote(this.props.quoteId);
      this.props.toggleRefresh();
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.didLoad && (
          <div className="showComment">
            {this.state.comment.map((text, index) => {
              return (
                <div key={text._id} className="comment">
                  <div style={{ display: "inline-block" }}>
                    <img className="round-img" src={text.avatar} alt="" />
                    <h5>{text.name}</h5>
                  </div>
                  <div style={{ display: "inline-block" }}>
                    <p className="idontknow">{text.commentText}</p>
                    <p>Posted on {text.date}</p>
                  </div>
                  <div style={{ display: "inline-block" }}>
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
                      <Modal.Footer>
                        <DeleteComment
                          author={this.props.author}
                          quoteId={this.props.quoteId}
                          commentId={text._id}
                          handleClose={this.handleClose}
                        />
                        <button variant="secondary" onClick={this.handleClose}>
                          Close
                        </button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ShowComment;
