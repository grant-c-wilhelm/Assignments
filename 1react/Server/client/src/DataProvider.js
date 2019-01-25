import React, { Component } from 'react'

// import axios from 'axios'
import { createContext } from 'vm';

const { Consumer, Provider } = createContext();

export default class DataProvider extends Component {
    constructor() {
        super();
        this.state = {
            transformers
        }
    }
    // componentDidMount() {
    //     axios.get('/transformers')
    //         .then(response => this.setState({ transformers: JSON.stringify(response.data) }))

    // }

    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}
export const withBotContext = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)