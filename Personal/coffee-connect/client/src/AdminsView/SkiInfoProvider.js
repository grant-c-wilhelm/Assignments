import React, { Component, createContext } from 'react'

import axios from 'axios'

const { Consumer, Provider } = createContext();

export default class SkiInfoProvider extends Component {
    constructor() {
        super();
        this.state = {
            skierData: []
        }
        // this.editSkierDetail = this.editSkierDetail.bind(this)
    }

    //I need to get the data from the server i created
    getSkierData() {
        axios.get('/api/skierModel')
            .then(serversResponse => this.setState({
                skierData: serversResponse.data
            }))
    }
    componentDidMount() {
        this.getSkierData();
    }

    // editSkierDetail(id, updatedDetails) {
    //     //send out the axios put request and set the state 
    //     alert(JSON.stringify(id, updatedDetails))

    //     //After the axios we will do what is below
    //     this.setState(ps => ({
    //         skierData: ps.skierData.map(skiers => skierData._id === id ? { ...skierData, ...updatedDetails } : skierData)
    //     }))
    // }

    render() {
        const value = {
            ...this.state,
            editSkierDetail: this.editSkierDetail // 1. this editskier is set to be the value
        }
        return (
            //2. the value is passed to the provider
            <Provider value={value}>
                {this.props.children}
            </Provider>

        )
    }
}
export const withSkierContext = C => props => (
    // 3. Provider is accessed via the consumer which i wrapped in 'withskiercontext'
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)
