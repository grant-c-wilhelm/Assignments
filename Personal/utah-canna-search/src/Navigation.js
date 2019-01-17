import React from 'react'

import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav id='main-nav' >
            <div className='wrapper'>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/Strains">Strains</Link></li>
                    <li><Link to="/Effects">Effects</Link></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navigation