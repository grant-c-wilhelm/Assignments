import React from 'react'
import Navigation from './Navigation'
import NavigationBanner from './NavigationBanner';
function Header () {
    return (
        <div>
            <Navigation />
            <NavigationBanner />
        </div>
    )
}

export default Header