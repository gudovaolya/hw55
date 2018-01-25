import React from 'react';
import './Try.css';

const Try = (props) => {
    return (
        <div className="try">Tries: <span>{props.tries}</span></div>
    )
};

export default Try;