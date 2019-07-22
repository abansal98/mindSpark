import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import $ from 'jquery';

class DeleteComment extends Component
{
    handleDelete(e)
    {
        e.preventDefault();
        $.ajax({
            url: "db/quote/comment/remove/" + this.props.quoteId + "/" + this.props.commentId,
            method: "DELETE"
        })
        .then(() => {
            console.log("Delete successfully");
        })
        .catch(err => {
            console.log(err);
        })

        this.props.handleClose();
    }

    render() {
        // have problem with commentId and author
        return (
            
            <form onSubmit={this.handleDelete.bind(this)}>
                {this.props.commentId}
                <button type="submit" className="btn btn-primary">Yes</button>
            </form>
        )
    }
}

export default DeleteComment;