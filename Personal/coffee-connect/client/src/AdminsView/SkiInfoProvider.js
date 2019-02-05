import React, { Component, createContext } from 'react'

import axios from 'axios'

const { Consumer, Provider } = createContext();

export default class SkiInfoProvider extends Component {
    constructor() {
        super();
        this.state = {
            skierData: []
        }
        this.editSkierData = this.editSkierData.bind(this)
        this.deleteSkierData = this.deleteSkierData.bind(this);
    }

    //AXIOS REQUESTS

    //GET request ot display data on the ADMIN DOM
    getSkierData() {
        axios.get('/api/skierModel')
            .then(serversResponse => this.setState({
                skierData: serversResponse.data
            }))
    }
    componentDidMount() {
        this.getSkierData();
    }
    // DELETE the data entry on the ADMIN DOM
    deleteSkierData(id) {
        axios.delete(`./api/skierModel/${id}`)
            .then(serversResponse => this.setState(ps => ({
                skierData: ps.skierData.filter(psData => psData._id !== id)
            })))
           
    }

    //PUT (edit data) edit the data on the ADMIN DOM
    editSkierData(){
        axios.put('./api/skierModel')
            .then(serversResponse => this.setState({
                skierData: serversResponse.data
            }))
    }
    //POST (create new skier) on the USER DOM
    postSkierData() {
        axios.post('/api/skiModel')
            .then(serversResponse => this.setState({
                skierData: serversResponse.data
            }))
    }


    // editSkierDetail(id, updatedDetails) {
    //HERE WILL GO MY FUNCTION TO THE EDIT BUTTON WHICH WILL CALL ON THE PUT REQUEST TO EDIT THE INFO!

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
            editSkierData: this.editSkierData, // 1. this editskier is set to be the value
            deleteSkierData: this.deleteSkierData
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
