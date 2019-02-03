import React, { Component } from 'react'
//manages data on the form as i type


export default class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: props.inputs
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const { value, name, type, checked } = e.target;
        this.setState(ps => ({
            inputs: {
                ...ps.inputs,
                [name]: type === 'checkbox' ? checked : value
            } //allows it to handle checkboxes
        }))
    }
    handleSubmit(e) {
        e.preventDefault();   //the formcontainer is calling on this 'submit' which is created in the adminEdit file
        this.props.submit(this.state.inputs)
    }
    render() {
        const props = {
            ...this.state,
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange
        }
        return (
            this.props.children(props)
        )
    }
}
