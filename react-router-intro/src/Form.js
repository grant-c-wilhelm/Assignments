import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            usersArray: []
        }
    }
    /* get the users fname, lname, uname & pword
       onChange
            1. Set those things to equal their SO in state, set state with the inputs.
       onSubmit
            1.Create newUser Object with user props (fname,lname,uname,pword)
            2.Push that new user into the usersArray
            3.Check if the username already exists in the usersArray
            4.Check is pword meets requirements **  */
    render() {
        return (
            <div>
                <form action="" className="form-signup">
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name" />
                    <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange} 
                        placeholder="Last Name"/>
                    <input
                        type="text"
                        name="userName"
                        value={this.state.userName}
                        onChange={this.handleChange} 
                        placeholder="Username"/>
                    <input
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Password" />

                  
                </form>

            </div>
        )
    }
}
