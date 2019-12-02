import React, { Component } from 'react'

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
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    <button>Tap</button>

                </form>

            </div>
        )
    }
}
