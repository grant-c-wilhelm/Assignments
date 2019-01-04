import React, { Component } from 'react';

class Box extends Component {
    constructor() {
        super();
        this.state = {                     //defining what the initial state is//
            currentRoll: 0,
            previousRolls: [] 
        }
        this.handleClick = this.handleClick.bind(this);
    }
    genRandomNumber(){
        return Math.floor(Math.random() * 6) + 1;
    }
    handleClick(event) {
        const x = this.genRandomNumber();
        this.setState(prevState => ({                 //the curly brackets is telling what the new state is going to be
            currentRoll: x,
            previousRolls: [x, ...prevState.previousRolls]
        }))                              //Setting the state. setState takes two args object or a function
    }
    render() {
        const displayRolls = this.state.previousRolls.map((roll, i) => <li key={i}> {roll}</li >)
        return (
            <div>
                <button id='0' onClick={this.handleClick}>Roll Die</button>
                <h1>{this.state.currentRoll}</h1>
                <ul>
                    Previous rolls:
                    {displayRolls}
                </ul>
            </div>
        )
    }
}

export default Box;