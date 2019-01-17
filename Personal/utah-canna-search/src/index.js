import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import App from './App'

export const { Consumer, Provider } = React.createContext()
render(
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    

    document.getElementById('root')

)