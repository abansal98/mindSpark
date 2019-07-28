import React, {Component} from 'react';

const Suggestions = (props) => {
    const options = props.results.map((obj, index) => (
        <li key={obj.index}>
            <p>Quote: {obj.quote}</p>
            <p>Author: {obj.author}</p>
            <p>Category: {obj.category}</p>
        </li>
    ))

    return <ul>{options}</ul>
} 

export default Suggestions;