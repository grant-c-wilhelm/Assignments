import React, { Component, createContext } from 'react'

import skierInfo from './skierInfo.json'

const { Consumer, Provider } = createContext();

export default class SkiInfoProvider extends Component {
    constructor() {
        super();
        this.state = {
            skierInfo
        }
        this.editSkierDetail = this.editSkierDetail.bind(this)
    }
    editSkierDetail(id, updatedDetails) {
        //send out the axios put request and set the state 
        alert(JSON.stringify( id, updatedDetails ))
    }
    
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