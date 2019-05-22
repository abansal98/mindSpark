import React, { Component } from "react";

class Content extends Component {
  // dummyDataLoop = () => {
  //   var rows = [];
  //   for (let i = 0; i < 50; i++) {
  //     rows.push(<div>dummy data</div>);
  //   }
  //   return rows;
  // };
  dummyDataLoop = () => [...Array(50)].map(x => <div>dummy data</div>);

  render() {
    return (
      <article>
        <div>[CONTENT AREA START]</div>
        {this.dummyDataLoop()}
        <div>[CONTENT AREA END]</div>
      </article>
    );
  }
}

export default Content;

// class A extends React.Component {
//   functionA () => {
//     return (
//       아래의 render 안 div 안에 보여줄 뷰를 리턴
//     )
//   }
//   render() {
//     return (
//     <div>
//       {this.functionA()}
//     </div>
//     )
//   }
// }
