import React, { Component } from 'react'

export default class Interval extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
        this.add = this.add.bind(this)
        this.stop = this.stop.bind(this)
        this.start = this.start.bind(this)
        this.reset = this.reset.bind(this)
    }
    stop () {
        clearInterval(this.interval)
    }
    reset () {
        clearInterval(this.interval);
        this.setState(ps => ({counter: ps.counter = 0}))
    }
    start () {
        clearInterval(this.interval)
        this.interval =  setInterval(this.add, .00000000000000000000000000000000000001);
    }
    add (){
        this.setState(ps => ({counter: ps.counter + 1}))
    }
  
    componentDidMount(){
        this.start();
    }
    componentWillUnmount(){
        clearInterval(this.interval);

    }
    render() {
        return (
            <div>
                {this.state.counter}
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.start}>Start</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}
