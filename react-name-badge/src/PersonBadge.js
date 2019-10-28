import React from 'react'

function PersonBadge(props) {
    return (
        <div>
            <div className="person-badge">
                <h1> Name: {props.firstName} {props.lastName}</h1>
                <h3> Location: {props.location}</h3>
                <h3>Birthplace: {props.placeOfBirth} on {props.birthday}</h3>
                <h3> Favorite Food: {props.favFood}</h3>
            </div>
        </div>
    )
}

export default PersonBadge
