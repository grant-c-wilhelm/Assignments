import React from 'react'
import { render } from 'react-dom'

import App from './App'
import SkiInfoProvider from './AdminsView/SkiInfoProvider'
import { BrowserRouter } from 'react-router-dom'

render(
    <SkiInfoProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </SkiInfoProvider>,
    document.getElementById('root')

)