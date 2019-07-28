import React, { Component } from "react";
import $ from "jquery";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleInput = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    $.ajax({
      url: "db/quote/comment/" + this.props.quoteId,
      method: "POST",
      data: {
        commentText: this.state.text
      }
    })
      .then(msg => {
        this.props.refresh();
      })
      .fail(err => {
        this.props.refresh();
      });
  };

  render() {
    return (
      <div class="Comment">
        <form onSubmit={this.handleSubmit}>
          <textarea
            name="comment"
            className="addComment"
            onChange={this.handleInput}
            value={this.state.text}
            placeholder="What do you think about this Quote?"
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Comment;