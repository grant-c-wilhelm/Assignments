import React, { Component } from 'react'
import axios from 'axios'


export default class CannabisData extends Component {
    constructor() {
        super();
        this.state = {
            strains: [],
            effect: "ALL",
            loading: true,
            errMsg: null
        }
    }
    getStrains() {
        axios.get('https://strainapi.evanbusse.com/fpybzHl/strains/search/all')
            .then(response => this.setState({
                strains: this.parseData(response.data),
                loading: false,
                errMsg: null
            }))
            .catch(err => this.setState({
                loading: false,
                errMsg: "Data is unavailable"
            }))
    }
    parseData(obj) {
        const output = []
        for (let key in obj) {
            obj[key].name = key
            output.push(obj[key])
        }
        return output
    }
    componentDidMount() {
        this.getStrains();
    }
     

    render() {
        return (
            this.props.children(this.state)
        )
    }

}
