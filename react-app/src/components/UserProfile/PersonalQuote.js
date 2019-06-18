import React, { Component } from "react";
import $ from "jquery";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import QuoteBox from "../Quoteboard/QuoteBox";

class PersonalQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: []
    };
  }

  fetchPersonalQuotes(author) {
    $.ajax({
      url: "db/quoteList/" + author,
      method: "GET"
    })
      .then(data => {
        this.setState({ quote: data });
      })
      .fail(err => {
        this.setState({
          quote: []
        });
      });
  }

  componentDidMount() {
    //debugger;
    this.fetchPersonalQuotes(this.props.username);
  }

  render() {
    return (
      <div className="quotelistBody">
        {this.state.quote.map((quoteObj, index) => {
          return (
            <QuoteBox
              quote={quoteObj.text}
              author={quoteObj.author}
              rating={quoteObj.rating}
            />
          );
        })}
        {/* <QuoteBox quote={quotes[0]} author={authors[0]} rating={ratings[2]} /> */}
      </div>
    );
  }
}

export default PersonalQuote;
