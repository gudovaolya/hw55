import React from 'react';
import './Cage.css';

const Cage = (props) => {
    let cageClasses = ['cage'];

    if (props.clicked) {
        cageClasses.push('clicked');
    }

    if (props.ring) {
        cageClasses.push('ring');
    }

    return(
        <div className={cageClasses.join(' ')} onClick={props.click}>{props.num}</div>
    )
};

export default Cage;