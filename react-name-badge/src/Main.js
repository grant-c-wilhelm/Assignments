import React, { Component } from 'react'
import Form from './Form'
import MappedPeople from './MappedPeople'

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            location: "",
            placeOfBirth: "",
            birthday: "",
            favFood: "",
            people: []
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const newPerson = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            location: this.state.location,
            placeOfBirth: this.state.placeOfBirth,
            birthday: this.state.birthday,
            favFood: this.state.favFood
        }

        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            location: "",
            placeOfBirth: "",
            birthday: "",
            favFood: "",
            people: [...prevState.people, newPerson]
        }))
    }
    render() {

        return (
            <div>
                <Form
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    location={this.state.location}
                    placeOfBirth={this.state.placeOfBirth}
                    birthday={this.state.birthday}
                    favFood={this.state.favFood}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <MappedPeople people={this.state.people} />
            </div>
        )
    }
}
