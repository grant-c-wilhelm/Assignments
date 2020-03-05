import React from 'react'


function FriendComponent(props) {
 
const {name, age, pets} = props
const styles = {border: 'solid black 2px', margin: '8px', padding: '15px' }
    return (
        <div style= {styles}>
            <h1>This is my friend</h1>
            <h2>Their name is {name}</h2>
            <h3>they are: {age}</h3>
            <ol>These are their pets! {pets}</ol>
        </div>
    )
}

export default FriendComponent
