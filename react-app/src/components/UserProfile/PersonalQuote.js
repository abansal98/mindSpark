import React, { Component } from "react";
import $ from "jquery";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class PersonalQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: "db/quoteList",
      method: "GET"
    }).then(data => {
      this.setState({ quote: data });
   
    });
  }
  render() {
    return (
      <div className="container">
        <ListGroup>
          {this.state.quote.map((value, index) => {
            return (
              <ListGroupItem key={value.author}>
                {value.text}
                <h3>- {value.author}</h3>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default PersonalQuote;
