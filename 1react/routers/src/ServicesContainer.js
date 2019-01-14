import React, { Component } from 'react'
  import Service from './Service'

export default class Services extends Component {
    constructor(){
    super();
    this.state = {
        services: [
            { 
                _id:'a',
                name: 'Group Ski Lesson',
                description: 'Full day ski lesson in small group setting',
                price: '$120',
                privider: 'Grant'
            },
            {
                _id:'b',
                name: 'Private family Lesson',
                description: 'Ski lesson with your familiy.  Group minimum is 4.',
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
