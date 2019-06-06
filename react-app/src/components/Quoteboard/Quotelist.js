import React, { Component } from "react";
import QuoteBox from "./QuoteBox";
import "./Quotelist.css";
import $ from "jquery";

const quotes = [
  "I have not failed, I've just found 10,000 ways that won't work",
  "The best way to predict future is to create it",
  "Creativity is just connecting things",
  "Let's go invent tomorrow instead of worrying about what happened yesterday",
  "I could either watch it happen or be a part of it",
  "Go big or Go home",
  "Formal education will make you a living, Self-education will make you a fortune",
  "Be fearful when others are greedy and greedy when others are fearful",
  "Risk comes from not knowing what you're doing",
  "If you can't do great things, do small things in a great way"
];
const authors = [
  "Thomas A. Edison",
  "Peter Ducker",
  "Steve Jobs",
  "Elon Musk",
  "Eliza Dushku",
  "Jim Rohn",
  "Warren Buffett",
  "Napoleon Hill"
];
const ratings = ["★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"];

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
      console.log(this.state.quotes);
    });
  }

  componentDidMount() {
    console.log(this.props);
    this.getQuotes();
  }

  render() {
    return (
      <div className="quotelistBody mt-5">
        {/* <QuoteBox quote={quotes[0]} author={authors[0]} rating={ratings[2]} />
        <QuoteBox quote={quotes[1]} author={authors[1]} rating={ratings[3]} />
        <QuoteBox quote={quotes[2]} author={authors[2]} rating={ratings[1]} />
        <QuoteBox quote={quotes[3]} author={authors[2]} rating={ratings[4]} />
        <QuoteBox quote={quotes[4]} author={authors[3]} rating={ratings[0]} />
        <QuoteBox quote={quotes[5]} author={authors[3]} rating={ratings[0]} />
        <QuoteBox quote={quotes[6]} author={authors[5]} rating={ratings[0]} />
        <QuoteBox quote={quotes[7]} author={authors[6]} rating={ratings[0]} />
        <QuoteBox quote={quotes[8]} author={authors[6]} rating={ratings[4]} />
        <QuoteBox quote={quotes[9]} author={authors[7]} rating={ratings[0]} /> */}
      </div>
    );
  }
}

export default Quotelist;
