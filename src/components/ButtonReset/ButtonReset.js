import React from 'react';
import './ButtonReset.css';

const ButtonReset = (props) => {
    return (
        <div className="btn-reset-row">
            <button className="btn-reset" onClick={props.click}>Reset Game</button>
        </div>
    )

};

export default ButtonReset;