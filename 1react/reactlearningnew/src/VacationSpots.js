import React from 'react'
import { isSpreadProperty } from '@babel/types'

function VacationSpots() {
    let vacationSpots = [
        {
            place: "Meridian, Idaho",
            price: 40,
            timeToGo: "Spring",

        }, {
            place: "Cancun",
            price: 900,
            timeToGo: "Winter",

        }, {
            place: "China",
            price: 1200,
            timeToGo: "Fall",

        }, {
            place: "Russia",
            price: 1100,
            timeToGo: "Summer",

        }, {
            place: "Lebanon",
            price: 400,
            timeToGo: "Spring",

        }
    ]



    const mappedLocations = vacationSpots.map((spots, i) => {
        return (
            <div key={i} className={spots.timeToGo} >
                <h1>{spots.place}</h1>
                <h3>${spots.price > 400 ? "$$"  : "$"}</h3>
                <h4>Best time to go: {spots.timeToGo}</h4>
            </div>
        )
    })


    return (
        <div>{mappedLocations}</div>
    )
}
export default VacationSpots
