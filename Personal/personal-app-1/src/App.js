import React from 'react'

import styles from "./assets/css/app.css";

// import Header from './components/Header'
// import FeatureBanSubHead from './components/FeatureBanSubHead'
// import BasicInfo from './components/BasicInfo'
// import Widgets from './components/Widgets'
// import Footer from './components/Footer'
import AboutMe from './components/AboutMe'


const App = () => {
    return(
        <div className = 'wrapper'>
            {/* <Header /> */}
            <AboutMe />
            {/* <FeatureBanSubHead /> */}
            {/* <BasicInfo />
            <Widgets />
            <Footer /> */}

        </div>
    )
}
export default App;