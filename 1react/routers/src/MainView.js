import React from 'react'

import Home from './Home'
import About from './About'
import Service from './Service'

import ServicesContainer from './ServicesContainer'
import ServiceDetail from './ServiceDetail'; 

import { Switch, Route } from 'react-router-dom';



const MainView = () => {
    return (
        <div className='main'>
           
                 {/*use the exact path for the home page*/}
                <Route path="/About" component={About} />
                <Route exact path="/services" component={ServicesContainer} />
                <Route path="/services/:id" component={props => <ServiceDetail{...props.location.state.service}/>} />
          
        </div>
    )
}
export default MainView;