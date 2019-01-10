import React from 'react'

import { Link } from 'react-router-dom'; //this import allows us to use the Link component in the file throghout the mark up below.

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
           
        </nav>
    )
}

export default Nav