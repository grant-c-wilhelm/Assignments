import React, { Component } from 'react'

export default class test extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            naems: []
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        })
    }
    render() {
        return (
            <div>
                <form action="">
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}
