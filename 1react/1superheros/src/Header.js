import React from 'react';

const Header =  () =>(
        <div>
        <header className='header'>
            <div className='headImage'></div>
            <ul className='navBar'>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Login</a>
            </ul>
        </header>
        <div className='section'>
                <p className='sectionText'>The Super of the SuperHeros</p>
            </div>
        </div>
    )

export default Header;