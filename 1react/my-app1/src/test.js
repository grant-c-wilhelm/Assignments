import React, { Component } from 'react';

class Box extends Component{
    handleClick(event){
        alert(`You clicked me! ${event.target.id}`)
    }
    render (){
        return (
            <div>
                <button id='0' onClick={this.handleClick}>Click me</button>
                <button id='1' onClick={this.handleClick}>Click me</button>
                <button id='2' onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default Box;