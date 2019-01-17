import React from 'react'
import PlanetLinks from './PlanetLinks'

function PlanetDetail({name, surface_water,climate,terrain }) {
    //below i can call into a html tag any information 
    
    return (
        <ul>
            <h1>Planet Name: {name}</h1>
            <h2>Climate: {climate}</h2>
            <h3>Terrain: {terrain}</h3>
            <h4>Percent of surface covered in water: {surface_water}</h4>
        </ul>
    )
} 
 
export default PlanetDetail
