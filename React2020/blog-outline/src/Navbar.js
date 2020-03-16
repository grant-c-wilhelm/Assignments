import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className="navbar-main">
            
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/when">When</Link>
            <Link className="nav-link" to="/location">Where</Link>
            <Link className="nav-link" to="/registry">Registry</Link>

        </div>
    )
}

export default Navbar
