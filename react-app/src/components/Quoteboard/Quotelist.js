import React, { Component } from "react";
import QuoteBox from "./QuoteBox";
import "./Quotelist.css";
import $ from "jquery";

class Quotelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      quotes: []
    };
  }

  getQuotes() {
    $.ajax({
      url: "/db/getQuotes/" + this.props.category,
      method: "GET"
    }).then(data => {
      this.setState({
        quotes: data
      });
    });
  }

  componentDidMount() {
    //console.log("Category value from quoteList: " + this.props.category);
    //this.getQuotes();
  }

  componentWillReceiveProps(props) {
    const { category } = this.props;
    if (props.category !== category) {
      this.setState({
        category: category
      }, () => {
        this.getQuotes();
      });
    }
  }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate called");
  //   this.getQuotes();
  // }

  render() {
    return (
      <div className="quotelistBody">
        {this.state.quotes.map((quoteObj, index) => {
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

export default Quotelist;
