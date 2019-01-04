import React from 'react';

import Spots from './Spots';
import Header from './Header';

import styles from "./assets/styles.css";

const App = () => {
    const vacationSpots = [
        {
            className: 'idaho',
            place: "Idaho $",
            price: 40,
            timeToGo: " Spring"
        }, {
            className: 'cancun',
            place: "Cancun $",
            price: 900,
            timeToGo: " Winter"
        }, {
            className: 'china',
            place: "China $",
            price: 1200,
            timeToGo: " Fall"
        }, {
            className: 'russia',
            place: "Russia $",
            price: 1100,
            timeToGo: " Summer"
        }, {
            className: 'lebanon',
            place: "Lebanon $",
            price: 400,
            timeToGo: " Spring"
        }
    ]
    const spotComponents = vacationSpots.map(spots => <Spots key="" {...spots} />)
    return (

        <div>
            <Header />
            <div className='section'>
                <p className='sectionText'>The Destinations of your Future</p>
            </div>
            <div className='destinations'>
                {spotComponents}
            </div>
        </div>

    )
}
export default App;
