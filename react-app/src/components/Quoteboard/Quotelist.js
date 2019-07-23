import React, { Component } from "react";
import QuoteBox from "./QuoteBox";
import "./Quotelist.css";
import $ from "jquery";

class Quotelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      quotes: [],
      didLoad: false
    };
  }

  getQuotes() {
    $.ajax({
      url: "/db/getQuotes/" + this.props.category,
      method: "GET"
    }).then(data => {
      // console.log(data);
      this.setState({
        quotes: data,
        didLoad: true
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.category !== this.props.category) {
      this.getQuotes();
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.didLoad && (
          <div className="quotelistBody">
            {this.state.quotes.map((quoteObj, index) => {
              if (quoteObj.reportNum <= 5) {
                return (
                  <QuoteBox
                    quote={quoteObj.text}
                    author={quoteObj.author}
                    rating={quoteObj.rating}
                    username={this.props.username}
                    quoteId={quoteObj._id}
                  />
                );
              }
            })}
            {/* <QuoteBox quote={quotes[0]} author={authors[0]} rating={ratings[2]} /> */}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Quotelist;
