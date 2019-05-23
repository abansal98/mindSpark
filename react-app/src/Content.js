import React, { Component } from "react";

class Content extends Component {
  // dummyDataLoop = () => {
  //   var rows = [];
  //   for (let i = 0; i < 50; i++) {
  //     rows.push(<div>dummy data</div>);
  //   }
  //   return rows;
  // };
  dummyDataLoop = () =>
    [...Array(5)].map(x => <div>dummy data form Content.js</div>);
  render() {
    return <article>{this.dummyDataLoop()}</article>;
  }
}

export default Content;
