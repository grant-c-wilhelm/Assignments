import React from 'react'
import PersonBadge from './PersonBadge'

function MappedPeople(props) {
    const mappedPeople = props.people.map((person,i) =>
        <div key={i} className="badge-container">
            <PersonBadge  
                firstName={person.firstName}
                lastName={person.lastName}
                location={person.location}
                placeOfBirth={person.placeOfBirth}
                birthday={person.birthday}
                favFood={person.favFood}
                isMuggle={person.isMuggle}
                hogwartsHouse={person.hogwartsHouse}
            />
        </div>
    )
    return (
        <div className="mappedPeople-container">
            {mappedPeople}
        </div>
    )
}

export default MappedPeople
