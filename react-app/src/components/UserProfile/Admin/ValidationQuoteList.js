import React, { Component } from "react";
import $ from "jquery";
import "../PersonalQuoteBox.css";
import ValidationQuoteBox from "./ValidationQuoteBox";

class ValidationQuoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      quotes: []
    };
  }

  getQuotes() {
    $.ajax({
      url: "/db/getPendingQuotes/",
      method: "GET"
    }).then(data => {
      this.setState({
        quotes: data
      });
    });
  }

  componentDidMount() {
    this.getQuotes();
  }

  render() {
    return (
      <React.Fragment>
        <h2>Quote Approval</h2>
        <div className="quotelistBody">
          {this.state.quotes.map((quoteObj, index) => {
            if (quoteObj.reportNum > 5) {
              return (
                <ValidationQuoteBox
                  quote={quoteObj.text}
                  author={quoteObj.author}
                  quoteId={quoteObj._id}
                />
              );
            }
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default ValidationQuoteList;
