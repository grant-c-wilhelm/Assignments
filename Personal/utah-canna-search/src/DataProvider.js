import React, { Component } from 'react';
import { Provider } from './index';
import axios from 'axios'

class DataProvider extends React.Component{
    constructor(){
        super();
        this.state = {
            strainInfo: [],

        }
    }
    getStrainInfo() {
        axios.get('https://strainapi.evanbusse.com/fpybzHl/strains/search/all')
        .then(serversResponse => this.setState({
            strainInfo: this.parseData(serversResponse.data)
        }))
    }
    componentDidMount(){
        this.getStrainInfo();
    }
    parseData(obj){
        const output = []
        for(let key in obj) {
            obj[key].name= key
            output.push(obj[key])
        }
        return output
    }
    render() {
        const props = {
            ...this.state
        }
        return (
            <Provider value= {props}>
                {this.props.children}
            </Provider>
        ) 
    } 
    
} // consumer function in new componet
export const 
