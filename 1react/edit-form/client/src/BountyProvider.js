import React, { Component } from 'react'
import Bounties from './Bounties'
const { Consumer, Provider } = createContext();


export default class BountyProvider extends Component {
    constructor() {
        super();
        this.state = {
            Bounties
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





