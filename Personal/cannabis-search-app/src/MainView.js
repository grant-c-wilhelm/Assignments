import React from 'react'
import {Route} from 'react-router-dom'
import Loading from './Loading'
import ErrorHandler from './ErrorHandler'
import CannabisData from './CannabisData'
import CannabisLinks from './CannabisLinks'
import CannabisDetail from './CannabisDetail'


function MainView() {
    return (
        <div>
            <CannabisData>
                {({ strains, loading, errMsg }) => (
                    <Loading loading={loading}>
                        <ErrorHandler errMsg={errMsg}>
                            {/* <Route exact path='/' component={() => (
                                <CannabisLinks strains={strains} />  //adjusted strains here to match the cannabisLinks.js props we pass
                            )} /> */}{null}
                        </ErrorHandler>
                    </Loading>
                )}
            </CannabisData>
        </div>
    )
}

export default MainView