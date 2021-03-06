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
      didLoad: false,
      needToReload: false
    };
  }

  ratingRefresh() {
    this.setState({
      needToReload: !this.state.needToReload
    });
  }

  getQuotes() {
    $.ajax({
      url: "/db/getQuotes/" + this.props.category,
      method: "GET"
    }).then(data => {
      console.log(data);
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
    if (this.state.needToReload == true) {
      this.getQuotes();
      this.ratingRefresh();
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
                    rating={quoteObj.ratingNum == 0 ? 0 : quoteObj.ratingAggregate / quoteObj.ratingNum}
                    username={this.props.username}
                    quoteId={quoteObj._id}
                    newauthor={quoteObj.newauthor}
                    ratingRefresh={this.ratingRefresh.bind(this)}
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
