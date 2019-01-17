import React from 'react'

import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Strains">Strains</Link>
            <Link to="/Effects">Effects</Link>

        </nav>
    )
}

export default Nav