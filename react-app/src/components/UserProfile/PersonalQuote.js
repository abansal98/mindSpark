import React, {Component} from "react";
import $ from "jquery";
import Button from "react-bootstrap/Button";

class PersonalQuote extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            quote: "",
        }


    };

    handleInput(e)
    {
        this.setState({quote: e.target.value});
    }

    addQuote(e)
    {
        e.preventDefault();
        console.log(this.state.quote);
        $.ajax({
            url: "/db/quote",
            method: "POST",
            data: {
                text: this.state.quote
      }
    })
      .then(msg => {
        alert(msg);
    
      })
      .fail(err => {
        alert(err.responseText);
      });
      
    }

    render() {
        return (
            <div className="upload">
            <form onSubmit={this.addQuote.bind(this)}>

                <textarea onChange={this.handleInput.bind(this)}
                name="quote"
                placeholder = "Enter Quote"
                value = {this.state.quote}/>
       
            <button 
                className="submit"
                type="submit">Submit
            </button>   
            </form> 
            </div>
         );
    }
}

export default PersonalQuote;