import React from 'react'

function Pet(props) {
    return (
        <div>
        <div>
                            <a>Pets:</a>
                            <a> Name: {props.petName} </a>
                            <a> Breed: {props.breed} </a>

                        </div>
        </div>
    )
}

export default Pet
