import React from 'react'

import UserPage from './UsersView/UserPage'
import AdminPage from './AdminsView/AdminPage'
import Home from './Home'

import { Consumer } from './index';
import { Switch, Route } from 'react-router-dom';

const MainView = props => {
    return (
        <div>

            <Route exact path='/' component={Home} />
            <Route path="/AdminPage" component={AdminPage} />
            <Route path="/UserPage" component={UserPage} />

        </div>

    )
}

export default MainView