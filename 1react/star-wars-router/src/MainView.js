import React from 'react'
import PlanetData from './PlanetData'
import Loading from './Loading'
import ErrorHandler from './ErrorHandler'
import {Route} from 'react-router-dom'
import PlanetLinks from './PlanetLinks'
import PlanetDetail from './PlanetDetail'


function MainView() {
    return (
        <div>
             <PlanetData> 
                {   ({loading, errMsg, planets}) => (
                    <Loading loading={loading}>
                       <ErrorHandler errMsg={errMsg}> 
                            <Route exact path='/' component={() => (
                                <PlanetLinks planets={planets} />
                            )}/>
                            <Route path='/planets/:index' component={routeProps => (
                                <PlanetDetail {...routeProps.location.state.planet} />
                            )} />
                       </ErrorHandler>
                    </Loading>
                )}
            </PlanetData>
        </div>
    )
}

export default MainView
