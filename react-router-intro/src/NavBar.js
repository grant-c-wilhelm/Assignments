import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="nav-bar"> 
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
        </div>
    )
}

export default NavBar
