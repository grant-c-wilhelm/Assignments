import React from 'react'
import { render } from 'react-dom'

import App from './App'
import { BrowserRouter } from 'react-router-dom'

export const { Consumer, Provider } = React.createContext()
render(

    <BrowserRouter>
        <App />
    </BrowserRouter>,

    document.getElementById('root')

)