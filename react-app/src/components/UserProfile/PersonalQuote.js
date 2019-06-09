import React, {Component} from "react";
import $ from "jquery";
import Button from "react-bootstrap/Button";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class PersonalQuote extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            quote: []
        }
    }

    componentDidMount()
    {
        $.ajax({
            url: "db/quoteList",
            method: "GET"
        })
        .then(data => {
           
            this.setState({quote: data});
            console.log(this.state.quote);
        })
    }
    render() {
        return (
            <div className="container">
                <ListGroup>
                    {this.state.quote.map((value, index) => {
                        return (
                            <ListGroupItem key={index}>
                                {value.text}
                                <h4>- {value.author}</h4>
                            </ListGroupItem>
                            
                        )
                    })}
                </ListGroup>
            </div>
         );
    }
}

export default PersonalQuote;