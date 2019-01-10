import React from 'react'

import herosList from './herosList'
import Heros from './Heros'


const Home = () => {
    const heroComponents = herosList.map(herosMapFunc => <Heros key="" {...herosMapFunc}  />)

    return (
        <div className='hero-data'>
            {heroComponents}
        </div>
    )
}

export default Home;


// const Vacations = () => {
//     const spotComponents = vacationSpots.map(spots => <Spots key="" {...spots} />)
//     return (
//         <div className='destinations'>
//                 {spotComponents}
//             </div>
//     )
// }