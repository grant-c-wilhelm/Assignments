import React from 'react';

const LeadBanner = () => {
    return (
        <div className="lead-banner">
            <img src={require('../assets/img/banner-1.jpeg')} />
            <div className="banner-content">
                <div className="wrapper">
                    <span className="title">Check our video</span>
                    <span className="sub-title">Learning in 6 weeks</span>
                </div>
            </div>
        </div>
    )
}


export default LeadBanner;
 