import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';
import $ from 'jquery';

class QuoteRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0
        }

        this.changeRating = this.changeRating.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeRating(newRating) {
        this.setState({rating: newRating}, () => {
            console.log(this.state.rating);
        });
        console.log("changeRating called");
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log("handleSubmit called");
        $.ajax({
            url: "/db/quote/rating/" + this.props.quoteId,
            method: "POST",
            data: {
                rating: this.state.rating
            }
        })
        .then(msg => {
            alert(msg);
        })
        .fail(err => {
            alert(err.reponseText);
        })
    }


    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <StarRatings starRatedColor="blue" rating={this.state.rating} changeRating={this.changeRating} name='rating' />
                    <div>{this.props.quoteId}</div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

export default QuoteRating;