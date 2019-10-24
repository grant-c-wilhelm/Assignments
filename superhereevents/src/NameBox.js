import React, { Component } from 'react'

export default class NameBox extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            names: []
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault()
        let newName = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        // const newFirstName = this.state.firstName
        // const newLastName = this.state.lastName
        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            // names: [...prevState.names, `${newFirstName} ${newLastName}` ]
            names: [...prevState.names, newName]
        }))
    }
    render() {
        const mappedNames = this.state.names.map(person =>
            <h3>
                {person.firstName} {person.lastName}
            </h3>)
        return (
            <div>
                <form action=""
                    onSubmit={this.onSubmit} >
                    <input
                        type="text"
                        placeholder="First Name" name="firstName"
                        value={this.state.firstName} onChange={this.handleChange} />
                    <input
                        type="text"
                        placeholder="Last Name" name="lastName"
                        value={this.state.lastName} onChange={this.handleChange} />
                    <button>Tap</button>
                    <h1>{mappedNames}</h1>
                </form>
            </div>
        )
    }
}
