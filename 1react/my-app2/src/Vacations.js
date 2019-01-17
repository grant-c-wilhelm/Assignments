import React from 'react'

import Spots from './Spots';
import vacationSpots from './vacationSpots';

const Vacations = () => {
    const spotComponents = vacationSpots.map(spots => <Spots key="" {...spots} />)
    return (
        <div className='destinations'>
                {spotComponents}
            </div>
    )
}
export default Vacations; 