import React from 'react'

function Friend(props) {
    return (
        <div className="friend-component">
             <h1>{props.name}</h1>  <h2>  Age: {props.age}</h2>
             <h3>{props.pets}</h3>
        </div>
    )
}

export default Friend
