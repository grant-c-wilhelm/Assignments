import React, { Component } from 'react'
import axios from 'axios'

export default class DataProvider extends Component {
    constructor() {
        super();
        this.state = {
            bountyHunters: []
        }
    }
    componentDidMount() {
        axios.get('/bountyHunters')
            .then(response => this.setState({ bountyHunters: JSON.stringify(response.data) }))
    }
    render() {
        return (
            <div>
                {this.state.bountyHunters}
            </div>
        )
    }
}

