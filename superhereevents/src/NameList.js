import React from 'react'

function NameList(props) {
    const mappedNames = props.names.map((person, i) =>
            <h1 key={i}>
                {person.firstName} {person.lastName}
            </h1>)
    return (
        <div>
            {mappedNames}
        </div>
    )
}

export default NameList
