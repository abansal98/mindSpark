import React, { Component } from "react";
import QuoteBox from "./QuoteBox";

const quotes = [
  "I have not failed, I've just found 10,000 ways that won't work",
  "The best way to predict future is to create it",
  "Creativity is just connecting things",
  "Let's go invent tomorrow instead of worrying about what happened yesterday",
  "I could either watch it happen or be a part of it"
];
const authors = ["Thomas A. Edison", "Peter Ducker", "Steve Jobs", "Elon Musk"];
const ratings = ["1/5", "2/5", "3/5", "4/5", "5/5"];

class Content extends Component {
  // dummyDataLoop = () => {
  //   var rows = [];
  //   for (let i = 0; i < 50; i++) {
  //     rows.push(<div>dummy data</div>);
  //   }
  //   return rows;
  // };

  // dummyDataLoop = () =>
  //   [...Array(5)].map(x => <div>dummy data form Content.js</div>);
  render() {
    return (
      <article>
        <QuoteBox quote={quotes[0]} author={authors[0]} rating={ratings[3]} />
        <QuoteBox quote={quotes[1]} author={authors[1]} rating={ratings[4]} />
        <QuoteBox quote={quotes[2]} author={authors[2]} rating={ratings[4]} />
        <QuoteBox quote={quotes[3]} author={authors[2]} rating={ratings[2]} />
        <QuoteBox quote={quotes[4]} author={authors[3]} rating={ratings[4]} />
      </article>
    );
  }
}

export default Content;
