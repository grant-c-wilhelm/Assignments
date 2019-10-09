import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrement = ()=>{
        this.setState({
            counter: this.state.counter - 1
        })
    }
    reset  = ()=>{
        this.setState({
            counter:this.state.counter = 0
        })
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.counter} </h1>
                <button onClick = {this.increment}>Increment</button>
                <button onClick = {this.decrement}>Decrement</button>
                <button onClick = {this.reset}>Reset</button>
            </div>
        )
    }
}
