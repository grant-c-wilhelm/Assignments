import React from 'react'

import EditForm from './EditForm';


function BountyDetail(name, price, alive) {
    return (
        <div>
            <h2>{$name}</h2>
            <h2>{$price}</h2>
            <h2>Status: {$alive ? "Alive" : "Dead"}</h2>
            <button>X</button>
            <button>edit</button>
            <EditForm inputs= {(name, price, alive)}/>
        </div>
    )
}

export default BountyDetail
