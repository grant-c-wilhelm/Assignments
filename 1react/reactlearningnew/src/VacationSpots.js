import React from 'react'

function VacationSpots() {
    let vacationSpots = [
        {
            place: "Meridian, Idaho",
            price: 40,
            timeToGo: "Spring"
        }, {
            place: "Cancun",
            price: 900,
            timeToGo: "Winter"
        }, {
            place: "China",
            price: 1200,
            timeToGo: "Fall"
        }, {
            place: "Russia",
            price: 1100,
            timeToGo: "Summer"
        }, {
            place: "Lebanon",
            price: 400,
            timeToGo: "Spring"
        }
    ]
    return (
        <div>
            {vacationSpots.map(spots =>
                <div>
                    <h1>{spots.place}</h1>
                    <h3>${spots.price}</h3>
                    <h4>Best time to go: {spots.timeToGo}</h4>
                </div>
            )}
        </div>
    )
}

export default VacationSpots
