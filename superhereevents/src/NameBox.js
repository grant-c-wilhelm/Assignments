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
        const newFirstName = this.state.firstName
        const newLastName = this.state.lastName
        this.setState(prevState => ({
            firstName: "",
            lirstName: "",
            names: [...prevState.names, `${newFirstName} ${newLastName}` ]
        }))
    }
    render() {
        const mappedNames = this.state.names.map(name => <h3>{name}</h3>)
        return (
            <div>
                <form action="" onSubmit={this.onSubmit} >
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    <button >Tap</button>
                    <h1>{mappedNames}</h1>
                </form>
            </div>
        )
    }
}
