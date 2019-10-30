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
            isMuggle: false,
            hogwartsHouse: "--Select House--",
            people: []
        }
    }
    handleChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
        this.setState({
            [event.target.name]: value
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
            favFood: this.state.favFood,
            isMuggle: this.state.isMuggle,
            hogwartsHouse: this.state.hogwartsHouse
        }

        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            location: "",
            placeOfBirth: "",
            birthday: "",
            favFood: "",
            isMuggle: false,
            hogwartsHouse: "--Select House--",
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
                    isMuggle={this.state.isMuggle}
                    hogwartsHouse={this.state.hogwartsHouse}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <div><MappedPeople people={this.state.people} /></div>


            </div>
        )
    }
}
