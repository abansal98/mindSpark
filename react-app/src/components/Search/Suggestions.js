import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';

const Suggestions = (props) => {
    const options = props.results.map((obj, index) => (
        // <li key={obj.index}>
        //     <p>Quote: {obj.quote}</p>
        //     <p>Author: {obj.author}</p>
        //     <p>Category: {obj.category}</p>
        // </li>
        <ListGroup key={index} variant="flush">
            <ListGroup.Item action href={`/search/${obj.quoteId}`}>
                <p>{obj.quote} - {obj.author}</p>
                <p>{obj.category}</p>
            </ListGroup.Item>
        </ListGroup>
    ))

    return <ul className="abc">{options}</ul>
} 

export default Suggestions;