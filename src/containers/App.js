import React, { Component } from 'react';
import './App.css';
import Board from '../components/Board/Board';
import Try from '../components/Try/Try';
import ButtonReset from '../components/ButtonReset/ButtonReset';

const makeCages = () => {
    let cages = [];
    let indRand = Math.floor(Math.random() * 36);

    for (let i = 0; i < 36; i++) {
       let cage = {};
       cage.isRing = false;
       cage.id = (i + 1) + 'id';
       cage.clicked = false;
       cages.push(cage);
    }
    cages[indRand].isRing = true;
    return cages;
};

let cages = makeCages();

class App extends Component {

    state = {
        cages: [...cages],
        countTry: 0,
        isStopGame: false,
        messageClasses: ['message']
    };

    showInnerCage = (id) => {
        const index = this.state.cages.findIndex(c => c.id === id);
        const cage = {...this.state.cages[index]};
        let countTry = this.state.countTry;
        let isStopGame = this.state.isStopGame;
        let messageClasses = this.state.messageClasses;

        if(!isStopGame && !cage.clicked) {
            cage.clicked = true;
            countTry++;

            const cages = [...this.state.cages];
            cages[index] = cage;

            if (cage.isRing) {
                isStopGame = true;
                messageClasses.push('active');
                this.setState({isStopGame, messageClasses});
            }

            this.setState({cages, countTry});
        }
    };

    resetGame = () => {
        let newCages = makeCages();
        let cages = [...this.state.cages];
        let countTry = this.state.countTry;
        let isStopGame = this.state.isStopGame;
        let messageClasses = this.state.messageClasses;
        cages = newCages;
        countTry = 0;
        messageClasses = ['message'];
        isStopGame = false;

        this.setState({cages, countTry, isStopGame, messageClasses});
    };

    render() {

        return (
            <div className="App">
                <div className="board-block">
                    <div className="board">
                        <Board
                            cages = {this.state.cages}
                            click = {this.showInnerCage}
                        />
                    </div>
                    <Try tries = {this.state.countTry} />
                    <ButtonReset click = {this.resetGame} />
                </div>
                <div className={this.state.messageClasses.join(' ')} >
                    Игра окончена, кольцо найдено!
                </div>
            </div>
        );
  }
}

export default App;
