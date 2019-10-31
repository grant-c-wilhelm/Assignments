import React, { Component } from 'react'
import FormInputs from './FormInputs'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            names: []
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newName = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            names: [...prevState.names, newName]
        }))
    }
    render() {
        return (
            <div>
                <FormInputs
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />

            </div>
        )
    }
}
