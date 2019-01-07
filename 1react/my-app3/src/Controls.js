import React from 'react';


const Controls = ({handleSmallTime, hadnlePartyDJ}) => (
    <div>
        <button onClick={handleSmallTime}>Small Time</button>
        <button onClick={hadnlePartyDJ}>Party</button>

    </div>
)
export default Controls