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
    handleChangeFName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    onSubmitFName = (event) => {
        event.preventDefault()
        const newFirstName = this.state.firstName
        this.setState(prevState => ({
            firstName: "",
            names: [...prevState.names, newFirstName]
        }))
    }
    render() {
        const mappedNames = this.state.names.map(name => <h3>{name}</h3>)
        return (
            <div>
                <form action="" onSubmit={this.onSubmitFName} >
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChangeFName} />
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChangeLName} />
                    <button >Tap</button>
                    <h1>{mappedNames}</h1>
                </form>
            </div>
        )
    }
}
