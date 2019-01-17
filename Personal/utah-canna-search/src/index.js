import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import App from './App'

import DataProvider from './DataProvider'

export const { Consumer, Provider } = React.createContext()
render(
    <DataProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </DataProvider>,
    

    document.getElementById('root')

)