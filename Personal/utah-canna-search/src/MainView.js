import React from 'react'

import Strains from './Strains'
import Effects from './Effects'
import Home from './Home'

import { Switch, Route } from 'react-router-dom';
import { Consumer } from './index';

const MainView = props => (
    
    <div className='main'>
        <Route exact path='/' component={Home} />   
        <Route path="/Strains" component={Strains} />
        <Route path="/Effects" component={Effects} />
       
    </div>
)

export default MainView 