import React, { Component } from "react";
import $ from "jquery";
import "../PersonalQuoteBox.css";
import ValidationQuoteBox from "./ValidationQuoteBox";

class ValidationQuoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      quotes: [],
      needToReload: false,
      didLoad: false
    };
  }

  toggleRefresh() {
    this.setState({
      needToReload: !this.state.needToReload
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.needToReload == true) {
      this.getQuotes();
      this.toggleRefresh();
    }
  }

  getQuotes() {
    $.ajax({
      url: "/db/getPendingQuotes/",
      method: "GET"
    })
      .then(data => {
        this.setState({
          quotes: data,
          didLoad: true
        });
      })
      .fail(err => {
        this.setState({
          quotes: [],
          didLoad: false
        });
      });
  }

  componentDidMount() {
    this.getQuotes();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.didLoad &&
          <div>
        <h2>Quote Approval</h2>
        <div className="quotelistBody">
          {this.state.quotes.map((quoteObj, index) => {
            if (quoteObj.reportNum > 5) {
              return (
                <ValidationQuoteBox
                  quote={quoteObj.text}
                  author={quoteObj.author}
                  quoteId={quoteObj._id}
                  toggleRefresh={this.toggleRefresh.bind(this)}
                />
              );
            }
          })}
        </div>
        </div>
        }
      </React.Fragment>
    );
  }
}

export default ValidationQuoteList;
