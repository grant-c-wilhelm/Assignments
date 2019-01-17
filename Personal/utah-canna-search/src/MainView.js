import React from 'react'

import StrainsDetails from './StrainsDetails'
import Strains from './Strains'
import Effects from './Effects'
import Home from './Home'

import { Switch, Route } from 'react-router-dom';
import { Consumer } from './index';
import DataProvider from './DataProvider';

const MainView = props => (

    <div className='main'>
        {/* <DataProvider>
            {({ strainInfo }) => (

            )} */}

            <Route exact path='/' component={Home} />
            <Route path="/Strains" component={Strains} />
            <Route path="/Effects" component={Effects} />

        {/* </DataProvider> */}



    </div>
)

export default MainView 