import React, { Component } from "react";
import $ from "jquery";
import "./SearchResults.css";
import QuoteBox from "../Quoteboard/QuoteBox";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      didLoad: false
    };
  }

  getQuote() {
    $.ajax({
      url: "/db/getQuoteSearch/" + this.props.match.params.data,
      method: "GET"
    }).then(data => {
      console.log(data);
      console.log(this.props.match.params.data);
      this.setState({
        result: data,
        didLoad: true
      });
    });
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <React.Fragment>
        <SignupsigninBlurBg />
        <br />
        <br />
        <br />
        <br />
        {this.state.didLoad && (
          <div className="searchResult">
            {this.state.result.map((quoteObj, index) => {
              if (quoteObj.reportNum <= 5) {
                return (
                  <QuoteBox
                    quote={quoteObj.text}
                    author={quoteObj.author}
                    rating={quoteObj.rating}
                    quoteId={quoteObj._id}
                    newauthor={quoteObj.newauthor}
                  />
                );
              }
            })}
          </div>
        )}
      </React.Fragment>
    );
  }
}

class SignupsigninBlurBg extends Component {
  render() {
    return <div className="SignupsigninBlurBgBody" />;
  }
}

export default SearchResults;
