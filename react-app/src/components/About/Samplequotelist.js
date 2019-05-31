import React, { Component } from "react";
import Samplequotebox from "./Samplequotebox";
import "./Samplequotelist.css";

const quotes = [
  "I have not failed, I've just found 10,000 ways that won't work",
  "The best way to predict future is to create it",
  "Creativity is just connecting things",
  "Let's go invent tomorrow instead of worrying about what happened yesterday",
  "I could either watch it happen or be a part of it"
];
const authors = ["Thomas A. Edison", "Peter Ducker", "Steve Jobs", "Elon Musk"];
const ratings = ["★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"];

class Samplequotelist extends Component {
  render() {
    return (
      <div className="samplequotelistBody">
        <Samplequotebox
          quote={quotes[0]}
          author={authors[0]}
          rating={ratings[2]}
        />
        <Samplequotebox
          quote={quotes[1]}
          author={authors[1]}
          rating={ratings[3]}
        />
        <Samplequotebox
          quote={quotes[2]}
          author={authors[2]}
          rating={ratings[1]}
        />
        <Samplequotebox
          quote={quotes[3]}
          author={authors[2]}
          rating={ratings[4]}
        />
        <Samplequotebox
          quote={quotes[4]}
          author={authors[3]}
          rating={ratings[0]}
        />
      </div>
    );
  }
}

export default Samplequotelist;
