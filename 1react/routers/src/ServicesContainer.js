import React, { Component } from 'react'
  import Service from './Service'

export default class Services extends Component {
    constructor(){
    super();
    this.state = {
        services: [
            { 
                _id:'a',
                name: 'Massage Therapy',
                description: 'withhot rocks',
                price: '$180',
                privider: 'nancy'
            },
            {
                _id:'b',
                name: 'Hot Rocks',
                description: 'with hot rocks',
                price: '$180',
                privider: 'nancy'
            },
            {
                _id:'c',
                name: 'Russian Massage',
                description: 'withhot rocks',
                price: '$180',
                privider: 'Dimitri'
            }
        ]
    }
}
    render() {
        const {services} = this.state
        return (
            
                <Service services = {services}/>
            
        )
    }
}
