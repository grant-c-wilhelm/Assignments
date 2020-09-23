import React from 'react'
function Home() {

    return (
        <div className="main-container">
            <div className="circle-logo-home"></div>
            <div className="image-houser">
                <div className="actual-image"></div>
            </div>
            <div className="main-story-container">
                <h1 className="ourStory-text" >Transportation</h1>
                <p className="main-story-text">
                    Transportation Provided to and from River Bottoms Ranch – Snow Country Limousine
                </p>

                <h1 className="ourStory-text-transportation" >Pick-up Time & Locations</h1>

                <p className="main-story-text">
                    3:30 PM – The Chateaux at Deer Valley, Park City</p>
                <p className="main-story-text">  3:45 PM -  Departure To Peaks Hotel</p>


                <p className="main-story-text">
                    4:00 PM - The Peaks Hotel, Park City
                </p>

                <p className="main-story-text"> 4:15 PM - Departure to River Bottoms Ranch  </p>


                <h1 className="ourStory-text-transportation" >Departure from River Bottoms Ranch</h1>
                <p className="main-story-text">
                    8:30 PM – Early departure for guest who would like to return early
                    <br></br>
                    11:00 PM – Depart to Peaks Hotel for guest drop off then onto The Chateaux for drop off
                </p>

            </div>

        </div>
    )
}

export default Home
