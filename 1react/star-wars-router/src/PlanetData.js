import React, { Component } from 'react'
import axios from 'axios';
export default class PlanetData extends Component {
    constructor(){
        super();
        this.state = {
            planets: [],             //our basketball of data that gets passed around our App... STATE!
            loading: true,            // loading is true becuase on the page is called its loading initialy
            errMsg: null
        }
    }
    getPlanets(){
        axios.get('https://swapi.co/api/planets')
        .then(response => this.setState({           //this is just a callback unciton saying to grab the data
            planets: response.data.results,
            loading: false,                 //because after the loaded page is done its no longer loading
            errMsg: null
        }))
        .catch(err => this.setState({               //just in case the API is dwn this err msg will pop up
            loading: false,
            errMsg: 'Data Unavailable'
        }))
    }
    componentDidMount(){
        this.getPlanets();   //this is just saying to run the getplanets, getplanets will exios request the http and then the response will be added to the props below
    }
    
    //methods  GET data: MOUNT AND UNMOUNT

    render() {
        return (
            this.props.children(this.state) //this is telling the render to return hey any children this is some data for yo uto return
        )
    }
}
