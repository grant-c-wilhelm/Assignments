import React from 'react'

function VacationSpotComponent(props) {
    const {place,price,timeToGo} = props

    return (
        <div>
            <h1>{place}</h1>
            <h1>{price}</h1>
            <h1>{timeToGo}</h1>
        </div>
    )
}



export default VacationSpotComponent
