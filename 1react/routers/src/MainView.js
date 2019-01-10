import React from 'react'

import Home from './Home'
import About from './About'
import Service from './Service'
import { Switch, Route } from 'react-router-dom';




const MainView = () => {
    return (
        <div className='main'>
            <Switch>
                <Route exact path="/" component={Home} /> {/*use the exact path for the home page*/}
                <Route path="/About" component={About} />
                <Route path="/Services" component={Service} />
            </Switch>
        </div>
    )
}
export default MainView;