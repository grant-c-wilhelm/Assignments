import React from 'react'

function PetListComponent(props) {
    const { name, breed } = props
    return (
        <div>
            <div>
                <h4>Pets Name: {name}</h4>
                <ol>
                    <h5>Pets Breed: {breed}</h5>
                </ol>
            </div>

        </div>
    )
}

export default PetListComponent
