import React, { Component, createContext } from 'react'
import bounties from './bounties.json'

const { Consumer, Provider } = createContext();


export default class BountyProvider extends Component {
    constructor() {
        super();
        this.state = {
            bounties
        }
    }
    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withBountyContext = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)





