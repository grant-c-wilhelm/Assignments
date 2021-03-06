import React from 'react';

import styles from "./assets/css/styles.css";


import Header from './Header/Header';
import Services from './Services';
import LessonsBanner from './LessonsBanner';
import Projects from './Projects';

const App = () => {
    return (
        <div>
            <Header />
            <Services />
            <LessonsBanner />
            <Projects />
        </div>

    )
}

export default App;


