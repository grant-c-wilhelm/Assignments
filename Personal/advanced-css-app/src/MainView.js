import React from 'react'
import Header from './header/Header';
import HeaderSubGrid from './grid-layout/HeaderSubGrid';
import AboutPage from './AboutPage/AboutPage';
import Feature from './features/Feature';

const MainView = () => {
    return (
        <div className="main">
            <Header />
            <AboutPage />
            <Feature />



        </div>
    )
}

export default MainView