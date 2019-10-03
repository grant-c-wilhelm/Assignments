import React from 'react'
import Friend from './Friend'
import Pet from './Pet'

function FriendList() {
    const friends = [
        {
            name: "Ben",
            age: 29,
            pets: [
                {
                    name: "spot",
                    breed: "tabby"
                }, {
                    name: "John Johnson",
                    breed: "husky"
                }, {
                    name: "Bear the bear",
                    breed: "Grizzly"
                }
            ]
        }, {
            name: "Bob",
            age: 31,
            pets: [
                {
                    name: "Sally",
                    breed: "Australian Shepard"
                }
            ]
        }, {
            name: "Marcus",
            age: 25,
            pets: [
                {
                    name: "Indy",
                    breed: "Akita"
                }, {
                    name: "Anna",
                    breed: "persian cat"
                }
            ]
        }, {
            name: "Jacob",
            age: 20,
            pets: [
                {
                    name: "fluffy",
                    breed: "sphynx cat"
                }, {
                    name: "patches",
                    breed: "sphynx cat"
                }, {
                    name: "tiger",
                    breed: "sphynx cat"
                }, {
                    name: "oscar",
                    breed: "sphynx cat"
                }
            ]
        }, {
            name: "Grant",
            age: 29,
            pets: [
                {
                    name: "Yogi",
                    breed: "French Bulldog"
                }, {
                    name: "Ali",
                    breed: "Female Woman"
                }
            ]
        }
    ]

    const mappedFriends = friends.map((friend) => {
        return (
            <Friend
                name={friend.name}
                age={friend.age}
                pets={friend.pets.map(pet => { //want this to just be a component imported from outside
                    return (
                            <Pet 
                            petName = {pet.name}
                            breed = {pet.breed}
                            />
                    )
                })
                }
            />)
    }

    )
    return (
        <div>
            {mappedFriends}
        </div>
    )
}

export default FriendList
