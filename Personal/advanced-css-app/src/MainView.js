import React from 'react'
import Header from './header/Header';
import HeaderSubGrid from './grid-layout/HeaderSubGrid';
import AboutPage from './AboutPage/AboutPage';
import Feature from './features/Feature';
import Tours from './tours/Tours';

const MainView = () => {
    return (
        <div className="main">
            <Header />
            <AboutPage />
            <Feature />
            <Tours />


        </div>
    )
}

export default MainView