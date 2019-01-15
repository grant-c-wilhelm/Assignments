import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: "",
            color: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange({ target: { name, value } }) {       /*handling changes within the input. Put the e in because its an event listener*/
        this.setState({
            [name]: value  //dynamically sets the input
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.submit(this.state)
        this.state = {
            name: "",
            age: "",
            color: ''
        }
    }
    render() {
        const { name, age, color } = this.state /*allows us to say name this.name instead of this.state.name*/
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name='name' value={name} type='text' placeholder='Enter Name'></input>
                <input onChange={this.handleChange} name='age' value={age} type='number' placeholder='Enter Age'></input>
                <input onChange={this.handleChange} name='color' value={color} type='text' placeholder='Enter Favorite Color'></input>
                <button>Submit</button>
            </form>
        )
    }
}
export default Form;
