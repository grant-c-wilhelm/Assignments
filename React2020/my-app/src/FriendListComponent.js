import React from 'react'
import FriendComponent from './FriendComponent'
import PetListComponent from './PetListComponent'
import friendData from './friendData'

function FriendListComponent() {
    //map through friendData and display friends via friend Comp and pet via pet Comp
    const mappedData = friendData.map(person => {
        return <FriendComponent
            key={person.id}
            name={person.name}
            age={person.age}
            pets={person.pets.map(pet => {
                return <PetListComponent
                    key = {pet.id}
                    name={pet.name}
                    breed={pet.breed}
                />
            })}

        />
    })
    return (
        <div>
            {mappedData}
        </div>
    )
}

export default FriendListComponent
