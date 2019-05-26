import React, { Component } from "react";
import QuoteBox from "./QuoteBox";

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
        <QuoteBox quote="quote1" author="author id" rating="rating level" />
        <QuoteBox quote="quote2" author="author id" rating="rating level" />
        <QuoteBox quote="quote3" author="author id" rating="rating level" />
        <QuoteBox quote="quote4" author="author id" rating="rating level" />
        <QuoteBox quote="quote5" author="author id" rating="rating level" />
      </article>
    );
  }
}

export default Content;
