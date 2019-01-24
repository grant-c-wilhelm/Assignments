import React, { Component } from 'react'

import axios from 'axios'

export default class DataProvider extends Component {
    constructor() {
        super();
        this.state = {
            transformers: []
        }
    }
    componentDidMount() {
        axios.get('/transformers')
            .then(response => this.setState({ transformers: JSON.stringify(response.data) }))

    }

    render() {
        return (
            <div>
                {this.state.transformers}
            </div>
        )
    }
}
