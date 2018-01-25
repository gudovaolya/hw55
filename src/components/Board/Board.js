import React from 'react';
import './Board.css';
import Cage from "./Cage/Cage";

const Board = props => {

    return props.cages.map(cage => {
        return <Cage
            key={cage.id}
            num={cage.num}
            clicked={cage.clicked}
            ring={cage.isRing}
            click={() => props.click(cage.id)}
        />
    });
};

export default Board;
