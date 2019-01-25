import React from 'react'
import { render } from 'react-dom'

import App from './App'
import DataProvider from './DataProvider';

render (
    <DataProvider>
        <App />
    </DataProvider>,
    document.getElementById('root')
)
