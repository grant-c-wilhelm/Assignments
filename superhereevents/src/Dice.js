import React, { Component } from 'react'
import DiceBox from './DiceBox'
import PlayerScore from './PlayerScore'

export default class Dice extends Component {
    constructor() {
        super()
        this.state = {
            generatedNumber: "Waiting for a Click",
            clickCounter: 0,
            playerOneScore: 0
        }
    }
    genRandomNumber = () => {
        if (this.state.clickCounter >= 4) {
            this.setState({
                generatedNumber: "Next Players Turn",
                clickCounter: 0,
                playerOneScore: 0

            })
        }
        let randomNum = (Math.floor(Math.random() * 7))
        this.checkRanNumNotZero()
        if (randomNum > 0 && this.state.clickCounter <= 3 && this.state.playerOneScore < 11) {
            this.setState({
                generatedNumber: randomNum,
                playerOneScore: this.state.playerOneScore + randomNum,
                clickCounter: this.state.clickCounter + 1
            })
        } else if (this.state.playerOneScore >= 11){
            this.setState({
                generatedNumber: "You Have Won",
                clickCounter: 0,
                playerOneScore: 0
            })
        }


    }
    resetNumberGenerator = () => {
        this.setState({
            generatedNumber: "Waiting for a Click",
            clickCounter: 0,
            playerOneScore: 0
        })
    }
    checkRanNumNotZero = () => {
        if (this.state.generatedNumber === 0) {
            this.genRandomNumber()
        }
    }
    threeClickReset = () => {
        if (this.state.clickCounter > 4) {
            this.setState({
                generatedNumber: "Next Players Turn",
                clickCounter: 0,
                playerOneScore: 0

            })
        }
    }
    // checkIfPlayerWon = () => {
    //     if (this.state.playerOneScore >= 10) {
    //         this.setState({
    //             generatedNumber: "You Have Won",
    //             clickCounter: 0,
    //             playerOneScore: this.state.playerOneScore
    //         })
    //     }
    // }

    render() {
        
        return (
            <div>
                <DiceBox
                    generatedNumber={this.state.generatedNumber}
                />
                <div>

                    <button onClick={this.genRandomNumber} >ROLL!</button>
                    <button onClick={this.resetNumberGenerator} >Reset</button>
                    <PlayerScore
                        playerScore={this.state.playerOneScore}
                        clicksItTook={this.state.clickCounter}
                    />

                </div>
            </div>
        )
    }
}
