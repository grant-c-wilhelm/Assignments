import React from 'react';

const LessonsBanner = () => {
    return (
        <div className="lessons-banner">
            <img src={require('../src/assets/img/banner-2.jpeg')} />
            <div className="banner-content">
                <div className="wrapper">
                    <span className="title">Our Lessons</span>
                    <span className="sub-title">Are Easy</span>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default LessonsBanner;