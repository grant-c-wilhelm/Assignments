import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className='logo-box'>
                <img alt="Logo" className='logo' src={require('../Img/logo-white.png')} />
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main"> Outdoors
                    </span>
                    <span className="heading-primary-sub"> is where life happens
                    </span>
                </h1>

            </div>

        </header>
    )
}

export default Header