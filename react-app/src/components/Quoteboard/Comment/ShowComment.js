import React, {Component} from 'react';
import $ from 'jquery';

class ShowComment extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            comment: [],
            didLoad: false
        };
    }

    fetchQuote(id)
    {
        $.ajax({
            url: "/db/getQuotes/" + id,
            method: "GET"
        })
        .then(data => {
            this.setState({
                comment: data.comments,
                didLoad: true
            })
        })
        .fail(err => {
            this.setState({
                comment: [],
                didLoad: false
            });
        });
    }

    componentDidMount()
    {
        this.fetchQuote(this.props.quoteId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.needToReload == true) {
          this.fetchQuote(this.props.quoteId);
        }
      }

    render() {
        return (
            <React.Fragment>
                {this.state.didLoad && 
                    <div className="showComment">
                        {this.state.comment.map(text => {
                            return (
                                <div key={text._id} className="comment">
                                    <div style={{display: 'inline-block'}}>
                                        <img className="round-img" src={text.avatar} alt=''/>
                                        <h5>{text.name}</h5>
                                    </div>
                                    <div style={{display: 'inline-block'}}>
                                        <p className="idontknow">
                                            {text.commentText}
                                        </p>
                                        <p>Posted on {text.date}</p>
                                    </div>
                                    <div style={{display: 'inline-block'}}>
                                        <form onSubmit={}>

                                        </form>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default ShowComment;