import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav id='main-nav' >
            <div className='wrapper'>
                <ul>
                    <li><Link to="/AdminPage">Admin</Link></li>
                    <li><Link to="/UserPage">User</Link></li>
                    <li><Link to="/">Home</Link> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation

