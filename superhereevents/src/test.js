import React, { Component } from 'react'
import NameForm from './NameForm'
import NameList from './NameList'


export default class Test extends Component {
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
        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            names: [...prevState.names, newName]
        }))
    }
    render() {
        return (
            <div>
                <NameForm
                    onSubmit={this.onSubmit}
                    handleChange={this.handleChange}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                />
                <NameList
                    names={this.state.names}
                />
            </div>
        )
    }
}
