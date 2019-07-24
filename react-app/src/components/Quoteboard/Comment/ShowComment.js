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
      show: false,
      needToReload: false
    };
  }

  setReload() {
    this.setState({
      needToReload: true
    })
  }

  fetchQuote(id) {
    $.ajax({
      url: "/db/getQuote/" + id,
      method: "GET"
    }).then(data => {
      this.setState({
        comment: data.comments,
        didLoad: true,
        needToReload: false
      })
      // .fail(err => {
      //   this.setState({
      //     comment: [],
      //     didLoad: false,
      //     needToReload: false
      //   });
      // });
    });
  }

  componentDidMount() {
    this.fetchQuote(this.props.quoteId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.quoteId != this.props.quoteId
      || this.state.needToReload == true
      || this.props.needToReload == true) {
      this.fetchQuote(this.props.quoteId);
      if (this.props.needToReload == true) {
        this.props.toggleRefresh();
      }
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
                  {this.props.username == text.name && (
                  <div style={{ display: "inline-block" }}>
                    <DeleteComment
                      author={this.props.author}
                      quoteId={this.props.quoteId}
                      commentId={text._id}
                      handleClose={this.handleClose}
                      reload={this.setReload.bind(this)}
                    />
                  </div>
                  )}
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