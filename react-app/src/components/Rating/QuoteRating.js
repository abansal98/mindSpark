import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import $ from "jquery";

class QuoteRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };

    this.changeRating = this.changeRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeRating(newRating) {
    this.setState({ rating: newRating });
  }

  handleSubmit(e) {
    e.preventDefault();
    $.ajax({
      url: "/db/quote/rating/" + this.props.quoteId,
      method: "POST",
      data: {
        rating: this.state.rating,
        username: this.props.username
      }
    })
      .then(msg => {
        // alert(msg);
        this.props.ratingRefresh();
      })
      .fail(err => {
        // alert(err.reponseText);
        this.props.ratingRefresh();
      });

    this.props.handleClose();
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="d-flex justify-content-start">
            <StarRatings
              starRatedColor="blue"
              rating={this.state.rating}
              changeRating={this.changeRating}
              name="rating"
            />
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default QuoteRating;
