import React from 'react'

function MappedPeople(props) {
    const mappedPeople = props.people.map(person =>
        <div>
            <h1>{person.firstName}</h1>
            <h2>{person.lastName}</h2>
            <h3>{person.location}</h3>
            <h4>{person.placeOfBirth}</h4>
            <h5>{person.birthday}</h5>
            <h5>{person.favFood}</h5>
        </div>
    )
    return (
        <div>
            {mappedPeople}
        </div>
    )
}

export default MappedPeople
