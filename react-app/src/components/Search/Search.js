import React, {Component} from 'react';
import {FormGroup} from 'react-bootstrap';
import $ from 'jquery';
import Suggestions from './Suggestions';

class Search extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            searchInfo: [],
            search: ""
        };

    }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({
            search: e.target.value
        }, () => {
            if (this.state.search) {
                this.Search();
            }
        })
    }

    Search = () => {
        console.log("Search called");
        $.ajax({
            url: "db/search/suggest/" + this.state.search,
            method: "GET"
        })
        .then(data => {
            console.log(data);
            const abc = data.map(obj => ({
                quote: obj.text,
                author: obj.author,
                category: obj.category,
                quoteId: obj._id
            }));

            this.setState({
                searchInfo: abc
            })
        })
    }


    render() {
        return (
            <React.Fragment>
                <form>
                    <input onChange={this.handleInputChange} value={this.state.search} placeholder="Search for.."/>
                    <Suggestions results={this.state.searchInfo}/>
                </form>

            </React.Fragment>
        )
    }
}

export default Search;