import React, { Component } from 'react'
import axios from 'axios'


export default class CannabisData extends Component {
    constructor(){
        super();
        this.state = {
            strains: [],
            loading: true,
            errMsg: null
        }
    }
    getStrains(){
        axios.get('https://strainapi.evanbusse.com/fpybzHl/strains/search/all')
        .then(response => this.setState({
            strains: response.data,
            loading: false,
            errMsg: null
        }))
        .catch(err => this.setState({
            loading: false,
            errMsg: "Data is unavailable"
        }))
    }
    componentDidMount(){
        this.getStrains();
    }

    render() {
        return (
            this.props.children(this.state)
        )
    }
}
