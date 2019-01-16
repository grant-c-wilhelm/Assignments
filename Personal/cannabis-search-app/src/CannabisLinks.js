import React from 'react'

import { Link } from 'react-router-dom'

function CannabisLinks ({cannabis}) {
    const cannabisLinks = cannabis.map((canna, i) => (
        <li key={i}>
            <Link to = {{
                pathname: `/cannabis/${i}`,
                state: {canna}
            }} > {canna.name}</Link>
        </li>
    ))
    return (
        <ul>
            {cannabisLinks}
        </ul>
    )
}
export default CannabisLinks